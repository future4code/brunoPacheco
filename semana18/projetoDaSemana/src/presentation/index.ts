import express, { Request, Response } from 'express'
import {
    CreateUserUC,
    CreateUserUCInput,
    CreateUserUCOutput
} from '../business/usecases/createUserUc';
import { BcryptService } from '../services/cryptography/bcryptService';
import { GenerateID } from '../services/generateId/generateId';
import { AuthenticationService } from '../services/authentication/authenticationService';
import { LoginUserUC } from '../business/usecases/loginUserUC';
import { UserDatabase } from '../data/userDatabase';
import { GetAllUsersUC } from '../business/usecases/getAllUsersUC';
import { FollowUserUC, FollowUserInput } from '../business/usecases/followUserUC';
import {
    UnfollowUserUC,
    UnfollowUserInput
} from '../business/usecases/unfollowUserUC';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["authentication"] as string) || "";
}

function authenticate(request: Request) {
    const authenticationService = new AuthenticationService()
    return authenticationService.getUserTokenById(getTokenFromHeaders(request.headers))
}

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

app.post("/users/follow", async (request: Request, response: Response) => {
    try {
        try{
            const userId = authenticate(request)

            const useCase = new FollowUserUC(new UserDatabase())

            const input: FollowUserInput = {
                followerId: userId,
                followedId: request.body.userToFollow
            }

            await useCase.execute(input)

            response.status(200).send({
                message: "Usuário seguido com sucesso!"
            })

        }catch (message){
            response.status(200).send({
                message: "Você já segue esse usuário!"
            });
        }

    } catch (error) {
        response.status(404).send({
            ...error, message: error.message
        });
    }

});

app.delete("/users/unfollow", async (request: Request, response: Response) => {
    try {
        const userId = authenticate(request)

        const useCase = new UnfollowUserUC(new UserDatabase())

        const input: UnfollowUserInput = {
            followerId: userId,
            followedId: request.body.userToUnfollow
        }

        await useCase.execute(input)

        response.status(200).send({
            message: "Você não segue mais o usuário!"
        })
    } catch (error) {
        response.status(404).send({
            ...error, message: error.message
        });
    }
})

export default app