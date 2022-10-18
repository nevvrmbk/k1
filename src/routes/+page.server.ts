export function load({ getClientAddress, platform }: any) {
	try {
		const value = platform.env.BUCKETKIT.get('<KEY>');
		return {
			ip: getClientAddress(),
			value: value
		};
	} catch (error) {
		console.log(error);
        return {};
	}
}
