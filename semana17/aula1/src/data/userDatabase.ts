import { User } from "../business/entities/user"
import knex from 'knex'


export class UserDatabase {
    private connection: knex

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com/',
                user: 'bruno',
                password: process.env.FOOD4U_SENHA,
                database: 'bruno'
            }
        })

    }

    public async createUser(user: User): Promise<void> {
        await this.connection.raw(
            `INSERT INTO users(email, password)
            VALUES (${user.getEmail()},${user.getPassword()});`
        )
    }

    public async verifyEmailExist(user: User): Promise<boolean>{
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE email=${user.getEmail};`
        )

        const returnedUser = query[0][0];
        if(!returnedUser){
            return false
        }
        return true
    }
}