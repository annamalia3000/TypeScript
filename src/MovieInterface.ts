export default interface MovieInterface {
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly id: number,
    readonly genre: string,
    readonly time: number | string,
    readonly price?: number
}