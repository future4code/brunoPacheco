import express, { Request, Response } from 'express'
import { 
    CreateUserUC,
    CreateUserUCInput, 
    CreateUserUCOutput 
} from '../business/usecases/createUserUC/createUserUc';
import { BcryptService } from '../services/cryptography/bcryptService';
import { GenerateID } from '../services/generateId/generateId';
import { AuthenticationService } from '../services/authentication/authenticationService';
import { LoginUserUC } from '../business/usecases/createUserUC/loginUserUC';
import { UserDatabase } from '../data/userDatabase';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (request: Request, response: Response) => {
    try {
        const user: CreateUserUCInput = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        }

        const createUserUC = new CreateUserUC(
            new UserDatabase(),
            new GenerateID(),
            new BcryptService(),
            new AuthenticationService()
        );

        console.log(user)

        const result: CreateUserUCOutput = {
            authentication: await createUserUC.execute(user)
        }

        response.status(200).send(result)

    } catch (error) {
        response.status(404).send(error.message);
    }
});

// app.post('/login', async (request: Request, response: Response) => {
//     try {
//         const loginUC = new LoginUserUC(
           
//         )
//         const result = await loginUC.execute(
//             request.body.email,
//             request.body.password
//         )
//         response.status(200).send(result)

//     } catch (error) {
//         response.status(404).send({
//             ...error
//         });
//     }
// });

export default app