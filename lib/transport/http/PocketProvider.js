import PocketRequest from './client/PocketRequest';
import PocketCall from './client/PocketCall';
import PocketClient from './client/PocketClient';

import { Configuration, PocketAAT, HttpRpcProvider, Pocket } from '@pokt-network/pocket-js';

/**
 * Class supplementing the HTTP provider with the Pocket Network
 * of decentralized nodes.
 *
 * See: https://docs.pokt.network/docs/what-is-pocket-network
 */
export default class PocketProvider {
	/**
	 * Creates an instance of HttpProvider wrapped by the Pocket Network.
     *
     * @param {string} iconChainID - https://docs.pokt.network/docs/supported-networks
     * @param {PocketInstance} pocketInstance - the relayed pocketInstance
     * @param {PocketAAT} pocketAAT - the Application Auth Token
	 * See: https://github.com/pokt-network/pocket-aat-js
     *
	 */
	constructor(iconChainID, pocketInstance, pocketAAT) {
		this.iconChainID = iconChainID;
		this.pocketInstance = pocketInstance;
		this.pocketAAT = pocketAAT;
	}

	request(request, converter) {
		const body = JSON.stringify(request, (key, value) => {
			if (value) {
				return value;
			}
			return undefined;
		});
		const pocketRequest = new PocketRequest(
			body,
			this.iconChainID,
			this.pocketInstance,
			this.pocketAAT
		);
		return new PocketCall(PocketClient.newCall(pocketRequest), converter);
	}
}

PocketProvider.Configuration = Configuration;
PocketProvider.PocketAAT = PocketAAT;
PocketProvider.HttpRpcProvider = HttpRpcProvider;
PocketProvider.Pocket = Pocket;
