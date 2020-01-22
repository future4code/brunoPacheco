import { User } from "../../entities/user/user";

export interface LoginUserGateway {
    loginUser(user:User):Promise<void>
}