import { UserGateway } from "../gateways/userGateway";
import { CryptographyCompareGateway } from "../gateways/cryptography/compareEncryptGateway";
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";


export class LoginUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptoGateway: CryptographyCompareGateway,
        private authenticationGateway: AuthenticationGateway
    ) { }

    public async execute(input: LoginUCInput): Promise<LoginUCOutput> {
        const user = await this.userGateway.getUserByEmail(input.email);
        const isValidPassword = await this.cryptoGateway.compare(input.password,user.getPassword());
        if (!isValidPassword) {
            throw new Error("O email ou senha estão inválidos")
        }

        return {
            token: this.authenticationGateway.createToken(user.getId())
        }
    }
}

export interface LoginUCInput {
    email: string,
    password: string
}

export interface LoginUCOutput {
    token: string
}