import { UserGateway } from "../gateways/User/userGateway";
import { IdGeneratorGateway } from "../gateways/idGenerator/idGeneratorGatewy";
import { EncryptGateway } from "../gateways/cryptography/encryptGateway";
import { AuthenticationGateway } from "../gateways/authentication/authenticationGateway";

export class ChangeUsersPasswordUC {
    constructor(
        private createUserGateway: UserGateway,
        private encryptGateway: EncryptGateway,
        private authentication: AuthenticationGateway

    ) { }

    private verifyInputs(input: ChangeUsersPasswordInput) {
        if ((!input.password) || (input.password !== input.repeatPassword)) {
            throw new Error("Os campos devem estar preenchidos corretamente")
        }
    }

    public async execute(input: ChangeUsersPasswordInput): Promise<string> {
        this.verifyInputs(input);
        const encryptedPassword = await this.encryptGateway.encrypt(input.password);
        const changePassword = "TODO de troca de senha "

        return ''
    }
}


interface ChangeUsersPasswordInput {
    password: string,
    repeatPassword: string
}