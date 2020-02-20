import { UserGateway } from "../gateways/userGateway"

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
                birthDate: user.getBirthDate(),
                photo: user.getPhoto()
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
    birthDate:string,
    photo:string
}