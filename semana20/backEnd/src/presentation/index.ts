import express, { Request, Response } from 'express'
import { CreateUserUCInput, CreateUserUC } from '../business/usecases/createUserUC';
import { UserDatabase } from '../data/userDatabase';
import { GenerateID } from '../services/generateId/generateId';
import { AuthenticationService } from '../services/authentication/authenticationService';
import { BcryptService } from '../services/cryptography/bcryptService';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (request: Request, response: Response) => {
    try {
        const user: CreateUserUCInput = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            birthDate: request.body.birthDate,
            photo: request.body.photo
        }

        const createUserUC = new CreateUserUC(
            new UserDatabase(),
            new GenerateID(),
            new BcryptService(),
            new AuthenticationService()
        )

        const result = {
            authentication: await createUserUC.execute(user)
        }

        return {
            status:200,
            result,
            message:`Usuário ${user.name} criado com sucesso!`
        }

    } catch (error) {
        response.status(404).send(error.message);
    }
});

export default app