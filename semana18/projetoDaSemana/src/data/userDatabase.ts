import { BaseDatabase } from "./base/baseDatabase";
import { UserGateway } from "../business/gateways/User/userGateway";
import { User } from "../business/entities/user";

export class UserDatabase extends BaseDatabase implements UserGateway {
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

    public async getAllUsers():Promise<User[]> {
        const allUsers = await this.connection.raw(`
            SELECT * FROM users ;
        `)
        return allUsers[0].map(this.dbModelToUser);
    }

    private dbModelToUser(dbModel:any):User{
        return new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password
        )
    }

    public async getUserByEmail(email:string):Promise<User> {
        const user = await this.connection.raw(`
            SELECT * FROM users WHERE email="${email}"
        `)
        return this.dbModelToUser(user[0][0])
        
    }


}