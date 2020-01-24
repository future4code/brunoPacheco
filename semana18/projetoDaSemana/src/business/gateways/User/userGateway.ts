import { User } from "../../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExists(id: string): Promise<boolean>;
    createUserRelation(followerId: string, followedId: string): Promise<void>;
    deleteCreateUserRelation(followerId: string, followedId: string): Promise<void>

}

