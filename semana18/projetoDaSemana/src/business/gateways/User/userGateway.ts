import { User } from "../../entities/user";

export interface UserGateway {
    getUserByEmail(email:string):Promise<User>;
    createUser(user:User):Promise<void>;
}

