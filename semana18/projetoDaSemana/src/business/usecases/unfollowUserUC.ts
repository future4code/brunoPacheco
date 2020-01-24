import { UserGateway } from "../gateways/User/userGateway";
import { response } from "express";

export class UnfollowUserUC {
    constructor(
        private userGateway: UserGateway
    ) { }

    public async execute(input:UnfollowUserInput) {
        await this.verifyUsersExists(input)
        await this.userGateway.deleteCreateUserRelation(input.followerId, input.followedId)    
    }

    public async verifyUsersExists(input: UnfollowUserInput){
        await Promise.all([
            this.userGateway.verifyUserExists(input.followedId),
            this.userGateway.verifyUserExists(input.followerId)
        ])
    }
}

export interface UnfollowUserInput {
    followerId: string
    followedId: string
}