import RpcError from '@pokt-network/pocket-js';
import PocketResponse from './PocketResponse';


/**
 * Class that forwards requests through the Pocket Network relay function.
 */
export default class PocketCall {
	constructor(pocketCall, converter) {
		this.pocketCall = pocketCall;
		this.converter = converter;
	}

	execute() {
		return this.callAsync();
	}

	async callAsync() {
		try {
			const response = await this.pocketCall.execute();
			return (new PocketResponse(response, this.converter)).result;
		} catch (e) {
			if (typeof e.error === 'object') {
				throw new Error(e.error.message);
			} else {
				throw e;
			}
		}
	}
}
