import { UserGateway } from "../gateways/User/userGateway";
import { CryptographyCompareGateway } from "../gateways/cryptography/compareGateway";
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";

export class LoginUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptoGateway: CryptographyCompareGateway,
        private authenticationGateway: AuthenticationGateway
    ) { }

    public async execute(input: LoginInput): Promise<LoginOutput> {
        console.log(input)
        const user = await this.userGateway.getUserByEmail(input.email);
        console.log(user)
        const isValidPassword = await this.cryptoGateway.compare(input.password,user.getPassword());
        console.log(isValidPassword)
        if (!isValidPassword) {
            throw new Error("O email ou senha estão inválidos")
        }

        return {
            token: this.authenticationGateway.createToken(user.getId())
        }
    }
}

export interface LoginInput {
    email: string,
    password: string
}

export interface LoginOutput {
    token: string
}