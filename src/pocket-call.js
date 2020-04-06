const { Response } = require('./response')
const { RpcError } = require('@pokt-network/pocket-js')

/**
 * Class that forwards requests through the Pocket Network relay function.
 */
class PocketCall {
	/**
	 * Creates an Icon SDK compatible function to relay HTTP calls
     * @param {iconChainID} - https://docs.pokt.network/docs/supported-networks
	 * @param {string} url - URL
     * @param {string} body - body
     * @param {function} converter - JSON converter function if required
     * @param {function} pocketInstance - the relay function passed from the root application
     * @param {pocketAAT} pocketAAT - the Pocket Network Application Auth Token
     *
	 */
	constructor(iconChainID, url, body, converter, pocketInstance, pocketAAT) {
        this.iconChainID = iconChainID
        this.url = url
        this.body = body
		this.converter = converter
		this.pocketInstance = pocketInstance
		this.pocketAAT = pocketAAT
	}

	execute() {
		return this.callAsync()
	}

	async callAsync() {
		try {
            const relayResponse = await this.pocketInstance.sendRelay(
                this.body, 
                this.iconChainID, 
                this.pocketAAT, 
                undefined, 
                undefined, 
                "POST", 
                this.url
            )
            if (relayResponse instanceof RpcError) {
                console.log("Relay error:", relayResponse.message)
                throw new Error(relayResponse.message)
            }
            if (relayResponse.payload !== 'undefined') {
                return JSON.parse(relayResponse.payload)
            } else {
                throw new Error("Relay payload is undefined")
            }
        } catch(e) {
			if (typeof e.error === 'object') {
				const rpcError = new RpcError("0", e.error.message)
				throw rpcError.message
			} else {
				throw e
			}
		}
	}
}

module.exports.PocketCall = PocketCall