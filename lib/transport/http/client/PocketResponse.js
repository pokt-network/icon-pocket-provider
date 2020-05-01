export default class PocketResponse {
	constructor(response, converter) {
		const { result, error } = response;
		if (result) {
			this.result = typeof converter === 'function' ? converter(result) : result;
		}

		if (error) {
			this.error = error;
		}
	}
}