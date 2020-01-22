import { User } from "../entities/user/user";
import { IdGeneratorGateway } from "../gateways/idGenerator/idGeneratorGatewy"
import { EncryptGateway } from "../gateways/cryptography/encryptGateway";
import { CreateUserGateway } from "../gateways/User/userGateway"
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";

export class CreateUserUC {
    constructor(
        private createUserGateway: CreateUserGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private encryptGateway: EncryptGateway,
        private authentication: AuthenticationGateway

    ) { }

    private verifyInputs(input: CreateUserUCInput) {
        if (!(input.name || input.email || input.password)) {
            throw new Error("É necessário preencher todos os campos!")
        }
    }

    public async execute(input: CreateUserUCInput): Promise<string> {
        this.verifyInputs(input);
        const encryptedPassword = await this.encryptGateway.encrypt(input.password);
        const newUser = new User(
            this.idGeneratorGateway.generateId(),
            input.name,
            input.email,
            encryptedPassword,
        );
        await this.createUserGateway.createUser(newUser);

        const newAuthentication = this.authentication.createToken(newUser.getId())

        return newAuthentication
    }

}

export interface CreateUserUCInput {
    name: string
    email: string
    password: string
}

export interface CreateUserUCOutput {
    authentication: string
}