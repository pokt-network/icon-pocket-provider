const { PocketCall } = require('./pocket-call')

/**
 * Class supplementing the HTTP provider with the Pocket Network
 * of decentralized nodes.
 *
 * See: https://docs.pokt.network/docs/what-is-pocket-network
 */
class PocketProvider {
	/**
	 * Creates an instance of HttpProvider wrapped by the Pocket Network.
     * 
     * @param {iconChainID} - https://docs.pokt.network/docs/supported-networks
	 * @param {string} url - a dummy URL to keep consistency with ICON SDK configurations
     * @param {function} pocketInstance - the relayed pocketInstance
     * @param {pocketAAT} pocketAAT - the Application Auth Token
	 * See: https://github.com/pokt-network/pocket-aat-js
     *
	 */
	constructor(iconChainID, url, pocketInstance, pocketAAT) {
        this.iconChainID = iconChainID
		this.url = url
		this.pocketInstance = pocketInstance
		this.pocketAAT = pocketAAT
	}

	request(request, converter) {
		const body = JSON.stringify(request, (key, value) => {
			if (value) {
				return value
			}

			return undefined
		});
		return new PocketCall(this.iconChainID, this.url, body, converter, this.pocketInstance, this.pocketAAT);
	}
}

module.exports.PocketProvider = PocketProvider