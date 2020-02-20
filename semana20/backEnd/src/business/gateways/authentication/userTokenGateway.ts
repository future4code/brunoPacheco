export interface UserTokenGateway {
    getUserIdFromToken(token: string): string
    createToken(id: string): string
}