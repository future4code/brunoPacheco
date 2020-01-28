import { User } from "../entities/user";

export interface UserGateway {
    createUser(user:User):Promise<User>
    verifyEmailExist(email:string):Promise<boolean>
}