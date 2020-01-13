import express, {Request, Response} from 'express'
import { CreateUserUC, CreateUserInput } from '../business/usecases/createUser/createUserUC'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("createUser",(request:Request,response:Response)=>{
    const UseCase = new CreateUserUC()
    
    const  input:CreateUserInput ={
        email:"",
        password:""
    }
    
    UseCase.execute(input)
})

export default app