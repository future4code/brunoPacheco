import { GetAllUsersGateway } from "../gateways/User/getAllUsersGateway";

export class GetAllUsersUC {
    constructor(
        private getAllUsersGateway: GetAllUsersGateway
    ) { }

    public async execute(): Promise<GetAllUsersUCOutput> {
        const user = await this.getAllUsersGateway.getAllUsers()

        return {
            users: user.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }))

        }
    }
}

interface GetAllUsersUCOutput {
    users: GetAllUsersUCDetails[]
}

interface GetAllUsersUCDetails {
    id: string,
    name: string,
    email: string
}