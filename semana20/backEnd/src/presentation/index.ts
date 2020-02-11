import { LoginUserUC } from './../business/usecases/loginUserUC';
import express, { Request, Response } from 'express'
import { CreateUserUCInput, CreateUserUC } from '../business/usecases/createUserUC';
import { UserDatabase } from '../data/userDatabase';
import { GenerateID } from '../services/generateId/generateId';
import { AuthenticationService } from '../services/authentication/authenticationService';
import { BcryptService } from '../services/cryptography/bcryptService';
import { GetAllUsersUC } from '../business/usecases/getAllUsersUC';

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
            status: 200,
            result,
            message: `Usuário ${user.name} criado com sucesso!`
        }

    } catch (error) {
        response.status(404).send(error.message);
    }
});

app.get("/getallusers", async (request: Request, response: Response) => {
    try {
        const createUserUC = new GetAllUsersUC(new UserDatabase());
        const result = await createUserUC.execute();
        response.status(200).send(result);
    } catch (error) {
        response.status(404).send(error.message)
    }
});

app.post('/login', async (request: Request, response: Response) => {
    try {
        const loginUserUC = new LoginUserUC(
            new UserDatabase(),
            new BcryptService(),
            new AuthenticationService()

        )
        const result = await loginUserUC.execute(
            {
                email: request.body.email,
                password: request.body.password
            }

        );

        response.status(200).send(result)

    } catch (error) {
        response.status(404).send({
            ...error, message: error.message
        });
    }
});

export default app