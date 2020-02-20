export interface EncripytographyGateway {
    encrypt(word: string): Promise<string>;
    compare(word: string, hash: string): Promise<boolean>;
}