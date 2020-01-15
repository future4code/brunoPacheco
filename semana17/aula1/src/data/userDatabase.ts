import { User } from "../business/entities/user"


class UserModel {
    constructor(
        public email:string,
        public password:string
    ){}
}

class UserEntituMapper {
    entityToMoldel(entity:User):UserModel {
        return {
            email:entity.getEmail(),
            password:entity.getPassword()
        }
    }
}

export class UserDatabase{
    private connection: knex
    private userEntityMapper:UserEntituMapper

    constructor() {
        this.connection = knex({
            client:'mysql',
            connection: {
                host:'',
                user:'bruno',
                password:'',
                database:'food4U'
            }
        })
        this.userEntityMapper=new UserEntityMapper()
    }

    async createUser(user:User){

        await this.connection("users").insert(this.userEntityMapper.entityToModel(user))
    }
}