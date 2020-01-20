import { User } from "../../entities/user/user";

export interface CreateUserGateway {
    createUser(user:User):Promise<void>;
}