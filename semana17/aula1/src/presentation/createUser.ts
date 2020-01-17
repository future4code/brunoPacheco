import { Request, Response } from 'express'
import { CreateUserInput, CreateUserUC } from '../business/usecases/createUser/createUserUC'

export async function createUserEndPoint(request: Request, response: Response) {
    try {
        const createUserInput: CreateUserInput = {
            email: request.body.email,
            password: request.body.password
        }

        const useCase = new CreateUserUC(createUserInput)

        const result = await useCase.execute(createUserInput)

        response.send({ ...result, success: true, message: "Usuário criado com sucesso" })
    } catch (e) {
        response.status(500).send(e)
    }
}