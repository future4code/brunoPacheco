export interface AuthenticationGateway {
    createToken(id: string): string
    verifyToken(token: string): string
}