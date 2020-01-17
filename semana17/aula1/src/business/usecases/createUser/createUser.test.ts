import { CreateUserUC } from "./createUserUC"
import { UserGateway } from "../../gateway/userGateway"
import { User } from "../../entities/user"

describe("Test createUser useCase", () => {
    
    it("Should create user", async () => {

        const input = {
            email:"teste@teste.com",
            password:"123456"}

        const userGateway:UserGateway = {
            
            createUser: jest.fn().mockReturnValue(new User(input.email,input.password)),
            verifyEmailExist:jest.fn().mockReturnValue(false)
        }

        const useCase = new CreateUserUC(userGateway)

        const response = await useCase.execute(input)
    
        expect(response.email).toBe(input.email)
    })

    it("Shouldn't create user", async () => {

        const input = {
            email:"",
            password:"123456"
        }

        const userGateway:UserGateway = {
            
            createUser: jest.fn().mockReturnValue(new User(input.email,input.password)),
            verifyEmailExist:jest.fn().mockReturnValue(false)
        }

        const useCase = new CreateUserUC(userGateway)
    
        await expect(useCase.execute(input)).rejects.toThrowError("É necessário um email")
    })
})


    
