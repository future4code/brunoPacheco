import { EncryptGateway } from "../gateways/cryptography/encryptGateway";
import { LoginUserGateway } from "../gateways/User/loginUserGateway";
import { User } from "../entities/user/user";

export class LoginUserUC {
    private loginUserGateway:LoginUserGateway
    private encryptGateway: EncryptGateway;
    
    private verifyInputsLogin(input:LoginUserUCInput){
        if(!(input.email || input.password)) {
            throw new Error("É necessário preencher todos os campos!")
        }
    }
    
    public async execute(input:LoginUserUCInput):Promise<LoginUserUCOutput> {
        this.verifyInputsLogin(input);
        const encryptedPassword = await this.encryptGateway.encrypt(input.password);
        const login = new User(
            input.email,
            encryptedPassword
        )
            
       await this.loginUserGateway.loginUser()

        const newAuthentication = this.authentication.createToken(login.getId())

        return newAuthentication
    }
}

export interface LoginUserUCInput {
    email:string
    password:string
}

export interface LoginUserUCOutput {
    authentication:string
}