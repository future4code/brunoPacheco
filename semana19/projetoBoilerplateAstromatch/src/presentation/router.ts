import { CreateUserUC } from "../business/usecases/createUserUc";
import { UserDatabase } from "../data/userDatabase";
import { GenerateID } from "../services/generateId/generateId";
import { BcryptService } from "../services/cryptography/bcryptService";
import { AuthenticationService } from "../services/authentication/authenticationService";

export class ApiRouter {
  public static async handleRoute(path: string, event: any): Promise<any> {
    switch (path) {
      case '/signup':
        const user: CreateUserUCInput = {
          name: event.body.name,
          email: event.body.email,
          password: event.body.password,
          birth_date: event.body.birth_date,
          picture: event.body.picture
        }

        const createUserUC = new CreateUserUC(
          new UserDatabase(),
          new GenerateID(),
          new BcryptService(),
          new AuthenticationService()
        );

        const result: CreateUserUCOutput = {
          authentication: await createUserUC.execute(user)
        }

        return {
          status: 200,
          result,
          message: "Usuário criado com sucesso"
        } 
      case '/getallusers':

        break;
      case '/login':

        break;
      case '/users/match':

        break;
      case '/users/unmatch':

        break;
      case '/getallrelationsusers':

        break;
      default:
        throw new Error("Rota não existe");
    }
  }
}

interface CreateUserUCInput {
  name: string,
  email: string,
  password: string,
  birth_date: string,
  picture: string
}

interface CreateUserUCOutput {
  authentication: string
}