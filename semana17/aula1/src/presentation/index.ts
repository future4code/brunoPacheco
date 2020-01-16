import express, {Request, Response} from 'express'
import { CreateUserUC, CreateUserInput } from '../business/usecases/createUser/createUserUC'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/createUser",(request:Request,response:Response)=>{
    const createUserUseCase = new CreateUserUC()
    
    const  createUserInput:CreateUserInput ={
        email:"",
        password:""
    }
    
    createUserUseCase.execute(createUserInput)
})

export default app