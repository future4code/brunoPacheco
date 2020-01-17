import { User } from "../../entities/user"
import { UserDatabase } from "../../../data/userDatabase"

export class CreateUserUC {
    private userDatabase:UserDatabase

    constructor(){
        this.userDatabase = new UserDatabase()
    }
    
    async execute(createUserInput: CreateUserInput):Promise<CreateUserOutput> {


        const email = createUserInput.email
        if (!email) {
            throw new Error("É necessário um email")
        }

        const password = createUserInput.password
        if (password.length <= 5) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const newUser = new User(email, password)

        await this.userDatabase.createUser(newUser)

        return {
            email: newUser.getEmail()
        }

    }
}

export interface CreateUserInput {
    email: string
    password: string
}

interface CreateUserOutput {
    email:string
}