import { UserTokenGateway } from './../gateways/authentication/userTokenGateway';
import { EncripytographyGateway } from './../gateways/cryptography/encryptographyGateway';
import { UserGateway } from '../gateways/userGateway';

export class ChangeUsersPasswordUC {
    constructor(
        private userTokenGateway: UserTokenGateway,
        private userGateway: UserGateway,
        private cryptographyGateway: EncripytographyGateway
    ) { }

    async execute(input: ChangeUsersPasswordUCInput): Promise<ChangeUsersPasswordUCOutput> {
        const userId = this.userTokenGateway.getUserIdFromToken(input.token);
        const user = await this.userGateway.getUserById(userId);
        const comparedPassword = await this.cryptographyGateway.compare(
            input.oldPassword,
            user.getPassword(),
        );

        if (!comparedPassword) {
            throw new Error("Password Incorreto!");
        }

        const encryptedNewPassword = await this.cryptographyGateway.encrypt(
            input.newPassword
        );

        await this.userGateway.updatePassword(user.getId(), encryptedNewPassword);

        return {
            token: this.userTokenGateway.createToken(user.getId())
        };
    }

}

export interface ChangeUsersPasswordUCInput {
    token: string
    oldPassword: string
    newPassword: string
}

export interface ChangeUsersPasswordUCOutput {
    token: string
}