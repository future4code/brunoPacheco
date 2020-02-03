import { User } from "../entities/user";
import { IdGeneratorGateway } from "../gateways/idGenerator/idGeneratorGatewy"
import { EncryptGateway } from "../gateways/cryptography/encryptGateway";
import { UserGateway } from "../gateways/User/userGateway"
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";

export class CreateUserUC {
    constructor(
        private createUserGateway: UserGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private encryptGateway: EncryptGateway,
        private authentication: AuthenticationGateway

    ) { }

    private verifyInputs(input: CreateUserUCInput) {
        if (!(input.name || input.email || input.password || input.birth_date || input.picture)) {
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
            input.birth_date,
            input.picture
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
    birth_date:string
    picture:string
}

export interface CreateUserUCOutput {
    authentication: string
}