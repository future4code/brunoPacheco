import { User } from "../../entities/user"

export class CreateUserUC {
    execute(input: CreateUserInput) {

        const email = input.email
        if (!email) {
            throw new Error("É necessário um email")
        }

        const password = input.password
        if (password.length <= 5) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const user = new User(email,password)

        return `O usuário ${user.getEmail} foi criado com sucesso!`
    }

}

export interface CreateUserInput {
    email: string
    password: string
}