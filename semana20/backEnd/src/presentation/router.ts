import { CreateUserUCInput, CreateUserUC } from "../business/usecases/createUserUC";
import { UserDatabase } from "../data/userDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { AuthenticationService } from "../services/authentication/authenticationService";
import { GenerateID } from "../services/generateId/generateId";
import { LoginUserUC } from "../business/usecases/loginUserUC";
import { GetAllUsersUC } from "../business/usecases/getAllUsersUC";
import { ChangeUsersPasswordUC } from "../business/usecases/changeUsersPassword";

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        switch (path) {
            case "signup":
                try {
                    const user: CreateUserUCInput = {
                        name: event.body.name,
                        email: event.body.email,
                        password: event.body.password,
                        birthDate: event.body.birthDate,
                        photo: event.body.photo
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
                    console.log(error.message)
                }
            case "getallusers":
                try {
                    const createUserUC = new GetAllUsersUC(new UserDatabase());
                    const result = await createUserUC.execute();
                    return {
                        result
                    };
                } catch (error) {
                    console.log(error.message);
                }

            case "login":
                try {
                    const loginUserUC = new LoginUserUC(
                        new UserDatabase(),
                        new BcryptService(),
                        new AuthenticationService()

                    )
                    const result = await loginUserUC.execute(
                        {
                            email: event.body.email,
                            password: event.body.password
                        }

                    );
                    return {
                        result
                    };
                } catch (error) {
                    console.log(error.message)
                }
            case "changepassword":
                try {
                    const changePasswordUC = new ChangeUsersPasswordUC(
                        new AuthenticationService(),
                        new UserDatabase(),
                        new BcryptService()
                    );
                    const result = await changePasswordUC.execute({
                        token: getTokenFromHeaders(event.headers),
                        oldPassword: event.body.oldPassword,
                        newPassword: event.body.newPassword
                    });
                    return {
                        result
                    }
                } catch (error) {
                    console.log(error.message)
                }
            default:
                throw new Error("Rota não existe");
        }
    }
}