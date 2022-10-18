export function load({ getClientAddress, platform }: any) {
	try {
		platform.env.BUCKETKIT.put('one', 'the quick brown fox jumps over the lazy dog');
		const value = platform.env.BUCKETKIT.get('one');
		return {
			ip: getClientAddress(),
			value: value
		};
	} catch (error) {
		console.log(error);
        return {
			ip: getClientAddress(),
		};
	}
}
