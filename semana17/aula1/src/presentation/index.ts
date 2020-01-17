import express, { Request, Response } from 'express'
import { CreateUserUC } from '../business/usecases/createUser/createUserUC'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/createUser", async (request: Request, response: Response) => {
    try{
        const createUserUC = new CreateUserUC(
           new UserGateway()
        )
        
        const result = await createUserUC.execute({
            email:request.body.email,
            password:request.body.password
        });
        response.status(200).send(result);
    }catch (e) {
        response.status(400).send(
            {
                errorMessage:e.message
            }
        )
    }
})

export default app