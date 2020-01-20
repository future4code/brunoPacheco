import { User } from "../../entities/user/user";
import { IdGeneratorGateway } from "../../gateways/idGenerator/idGeneratorGatewy"
import { EncryptGateway } from "../../gateways/cryptography/encryptGateway";
import { CreateUserGateway } from "../../gateways/User/UserGateway"

export class CreateUserUC {
    constructor(
        private createUserGateway: CreateUserGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private encryptGateway: EncryptGateway

    ) { }
    public async execute(input: CreateUserUCInput): Promise<CreatUserUCOutput> {
        const encryptedPassword = await this.encryptGateway.encrypt(input.password);
        const newUser = new User(
            this.idGeneratorGateway.generateId(),
            input.name,
            input.email,
            encryptedPassword,
        );
        await this.createUserGateway.createUser(newUser);
        
        return {
            message: "Usuário criado com sucesso!"
        }
    }
}

export interface CreateUserUCInput {
    name: string;
    email: string;
    password: string;
}

export interface CreatUserUCOutput {
    message: string;
}