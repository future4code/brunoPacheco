import { User } from "../business/entities/user"
import knex from 'knex'

class UserModel {
    constructor(
        public email: string,
        public password: string
    ) {}
}

class UserEntityMapper {
    entityToModel(entity: User): UserModel {
        return {
            email: entity.getEmail(),
            password: entity.getPassword()
        }
    }
}

export class UserDatabase {
    private connection: knex
    private userEntityMapper: UserEntityMapper

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

        this.userEntityMapper = new UserEntityMapper()
    }

    async createUser(user: User) {

        await this.connection.raw(
            `INSERT INTO users(email, password)
            VALUES (${user.getEmail()},${user.getPassword()})`
        )
    }
}