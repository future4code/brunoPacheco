import { UserGateway } from "../gateways/User/userGateway";

export class FollowUserUC {
    constructor(
        private userGateway: UserGateway
    ) { }

    public async execute(input:FollowUserInput) {
        await this.verifyUsersExists(input)
        await this.userGateway.createUserRelation(input.followerId, input.followedId)    
    }

    async verifyUsersExists(input: FollowUserInput) {
        await Promise.all([
            this.userGateway.verifyUserExists(input.followedId),
            this.userGateway.verifyUserExists(input.followerId)
        ])
    }
}

export interface FollowUserInput {
    followerId: string
    followedId: string
}