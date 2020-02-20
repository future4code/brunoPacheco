import { UserGateway } from "../gateways/userGateway";
import { IdGeneratorGateway } from "../gateways/idGenerator/idGeneratorGateway";
import { EncripytographyGateway } from "../gateways/cryptography/encryptographyGateway";
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";
import { User } from "../entities/user";

export class CreateUserUC {
    constructor(
        private createUserGateway: UserGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private encryptGateway: EncripytographyGateway,
        private authentication: AuthenticationGateway
    ) { }

    private verifyInputs(input: CreateUserUCInput) {
        if (!(input.name || input.email || input.password || input.birthDate || input.photo)) {
            throw new Error("Dica: Para criar um usuário, deve-se preencher todos os campos!")
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
            input.birthDate,
            input.photo
        );

        await this.createUserGateway.createUser(newUser); 7

        const newAuthentication= this.authentication.createToken(newUser.getId());

        return newAuthentication
    }
}

export interface CreateUserUCInput {
    name: string,
    email: string,
    password: string,
    birthDate: string,
    photo: string
}