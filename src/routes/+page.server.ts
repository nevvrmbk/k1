export function load(page: any) {
    console.log(page);
    return {
        ip: page.getClientAddress(),
    };
}