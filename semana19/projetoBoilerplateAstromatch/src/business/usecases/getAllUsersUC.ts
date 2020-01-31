import { UserGateway } from "../gateways/User/userGateway";

export class GetAllUsersUC {
    constructor(
        private userGateway: UserGateway
    ) { }

    public async execute(): Promise<GetAllUsersUCOutput> {
        const user = await this.userGateway.getAllUsers()

        return {
            users: user.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                birth_date:user.getBirthDate(),
                picture:user.getPicture()
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
    email: string,
    birth_date:string,
    picture:string
}