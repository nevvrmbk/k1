export function load({ getClientAddress, platform }: any) {
    const value = platform.env.BUCKETKIT.get("<KEY>");
    return {
        ip: getClientAddress(),
        value: value,
    };
}