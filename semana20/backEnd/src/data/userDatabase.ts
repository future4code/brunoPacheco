import { BaseDatabase } from "./base/baseDatabase"
import { UserGateway } from "../business/gateways/userGateway";
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

    public async verifyUserExists(id: string): Promise<boolean> {
        const user = await this.connection.raw(`
            SELECT * FROM futureTube_Users WHERE id="${id}";
        `)

        return user
    }

    public async getUserByEmail(email: string): Promise<User> {
        const user = await this.connection.raw(`
            SELECT * FROM futureTube_Users WHERE email="${email}";
        `)
        return this.dbModelToUser(user[0][0])

    }

    public async updatePassword(id:string,newPassword:string):Promise<void> {
        await this.connection.raw(`
            UPDATE futureTube_Users SET password="${newPassword}" WHERE id="${id}";
        `)
    }

    public async getUserById(id: string): Promise<User> {
        const user = await this.connection.raw(`
            SELECT * from futureTube_users WHERE id="${id}";
        `);
        const returnedUser = this.dbModelToUser(user[0][0]);
        if (!returnedUser) {
            throw new Error("Usuário não encontrado");
        }
        return new User(
            returnedUser.getId(),
            returnedUser.getName(),
            returnedUser.getEmail(),
            returnedUser.getPassword(),
            returnedUser.getBirthDate(),
            returnedUser.getPhoto()
        );
    }

}