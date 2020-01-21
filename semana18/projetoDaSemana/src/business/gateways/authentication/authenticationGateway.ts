export interface AuthenticationGateway {
    createToken(id: string): string
}