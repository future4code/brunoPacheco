import { BaseDatabase } from "./base/baseDatabase"
import { UserGateway } from "../business/gateways/UserGateway";
import { User } from "../business/entities/user";

export class UserDatabase extends BaseDatabase implements UserGateway {
    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO futureTube_Users (id,name,email,password,birthDate, photo)
            VALUES (
            "${user.getId()}",
            "${user.getName()}",
            "${user.getEmail()}",
            "${user.getPassword()}",
            "${user.getBirthDate()}",
            "${user.getPhoto()}");
        `)
    }

    public async getAllUsers(): Promise<User[]> {
        const allUsers = await this.connection.raw(`
            SELECT * FROM futureTube_Users ;
        `)
        return allUsers[0].map(this.dbModelToUser);
    }

    private dbModelToUser(dbModel: any): User {
        return new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password,
            dbModel.birth_date,
            dbModel.picture
        )
    }

}