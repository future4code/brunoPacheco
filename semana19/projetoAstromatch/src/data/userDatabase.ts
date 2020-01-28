import { BaseDatabase } from "./base/baseDatabase";
import { UserGateway } from "../business/gateways/User/userGateway";
import { User } from "../business/entities/user";

export class UserDatabase extends BaseDatabase implements UserGateway {
    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO Astromatch_users (id,name,email,password,birthDate,picture)
            VALUES (
            "${user.getId()}",
            "${user.getName()}",
            "${user.getEmail()}",
            "${user.getPassword()}",
            "${user.getBirthDate()}",
            "${user.getPicture()}");
        `)
    }

    public async getAllUsers(): Promise<User[]> {
        const allUsers = await this.connection.raw(`
            SELECT * FROM Astromatch_users ;
        `)
        return allUsers[0].map(this.dbModelToUser);
    }

    private dbModelToUser(dbModel: any): User {
        return new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password,
            dbModel.birthDate,
            dbModel.picture
        )
    }

    public async getUserByEmail(email: string): Promise<User> {
        const user = await this.connection.raw(`
            SELECT * FROM Astromatch_users WHERE email="${email}";
        `)
        return this.dbModelToUser(user[0][0])

    }

    public async verifyUserExists(id: string): Promise<boolean> {
        const user = await this.connection.raw(`
            SELECT * FROM Astromatch_users WHERE id="${id}";
        `)
        
        return user
    }

    public async createUserRelation(followerId: string, followedId: string): Promise<void> {
        await this.connection.raw(`
            INSERT INTO astromatch_follower_followed
            (follower_id, followed_id)
            VALUES ("${followerId}","${followedId}");
        `)
    }

    public async deleteCreateUserRelation(followerId: string, followedId: string): Promise<void> {
        await this.connection.raw(`
        DELETE FROM astromatch_follower_followed
        WHERE follower_id="${followerId}"
        AND followed_id="${followedId}";
    `)
    }

}