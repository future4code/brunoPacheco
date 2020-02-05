export interface EncripytographyGateway {
    encrypt(word: string): Promise<string>
}