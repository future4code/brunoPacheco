import { User } from "../entities/user/user";
import { GetAllUsersGateway } from "../gateways/User/getAllUsersGateway";

export class GetAllUsersUC {
    constructor(
        private getAllUsersGateway: GetAllUsersGateway
    ) {}

    public async execute():Promise<GetAllUsersUCOutput> {
        return {
            users: await this.getAllUsersGateway.getAllUsers()
        }
    }

}

interface GetAllUsersUCOutput {
    users: User[];
}