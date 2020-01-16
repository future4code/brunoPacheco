import { User } from "../../entities/user"
import { UserDatabase } from "../../../data/userDatabase"

export class GetAllUsersUC {
    private userDatabase:UserDatabase

    constructor(){
        this.userDatabase = new UserDatabase()
    }
    
    async execute(getAllUsersInput: GetAllUsersInput):Promise<void> {

    }
}

interface GetAllUsersInput {
    userId:string
}

interface GetALlUsersOutput {
    users:Array<{
        id:string,
        email:string,
        password:string
    }>
}