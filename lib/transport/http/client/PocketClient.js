export default class PocketRequest {
	static newCall(pocketRequest) {
		return {

			execute() {
				return this.sendAsync();
			},

			async sendAsync() {
				const {
					body, iconChainID, pocketInstance, pocketAAT,
				} = pocketRequest;

				try {
					const relayResponse = await pocketInstance.sendRelay(
						body,
						iconChainID,
						pocketAAT,
						undefined,
						undefined,
						'POST',
						'/api/v3/',
					);
					console.log(relayResponse);
					if (relayResponse.payload !== 'undefined') {
						return JSON.parse(relayResponse.payload);
					}
					throw new Error('Relay payload is undefined');
				} catch (e) {
					if (typeof e.error === 'object') {
						throw new Error(e.error.message);
					} else {
						throw e;
					}
				}
			},
		};
	}
}
