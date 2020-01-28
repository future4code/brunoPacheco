import { User } from "../../entities/user"
import { UserGateway } from "../../gateway/userGateway"

export class CreateUserUC {
    private userGateway: UserGateway

    constructor(userGateway: UserGateway) {
        this.userGateway = userGateway
    }

    async execute(input: CreateUserInput): Promise<CreateUserOutput> {
        this.validateInput(input)
        await this.verifyUserExists(input.email)

        const createdUser = await this.createUser(input)

        return {
            email: createdUser.getEmail()
        }
    }

    validateInput(input: CreateUserInput) {
        const email = input.email

        if (!email) {
            throw new Error("É necessário um email")
        }

        const password = input.password

        if (password.length <= 5) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

    }

    async verifyUserExists(input: string) {
        const emailExists = await this.userGateway.verifyEmailExist(input)

        if (emailExists) {
            throw new Error('Usuário já existe!')
        }
    }

    createUser(input: CreateUserInput) {
        const newUser = new User(input.email, input.password)
        return this.userGateway.createUser(newUser)

    }

}

interface CreateUserInput {
    email: string
    password: string
}

interface CreateUserOutput {
    email: string
}