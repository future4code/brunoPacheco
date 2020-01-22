import { BaseDatabase } from "./base/baseDatabase";
import { CreateUserGateway } from "../business/gateways/User/UserGateway";
import { User } from "../business/entities/user/user";

export class UserDatabase extends BaseDatabase implements CreateUserGateway {
    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO users (id,name,email,password)
            VALUES (
            "${user.getId()}",
            "${user.getName()}",
            "${user.getEmail()}",
            "${user.getPassword()}");
        `)
    }


}