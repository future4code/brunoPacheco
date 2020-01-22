import {
    AuthenticationGateway,
    TokenData
} from "../../business/gateways/authentication/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class AuthenticationService implements AuthenticationGateway {

    private static EXPIRES_IN = "1h"

    private getJwtSecretKey(): string {
        if (!process.env.JWT_SECRET) {
            throw new Error("Missing JWT secret key")
        }
        return process.env.JWT_SECRET
    }

    createToken(userId: string): string {
        const token = jwt.sign(
            { userId },
            this.getJwtSecretKey(),
            { expiresIn: AuthenticationService.EXPIRES_IN }

        )

        return token
    }

    verifyToken(token: string): string {
        const verifyToken = jwt.verify(
            token,
            this.getJwtSecretKey()
        ) as JwtData
        return verifyToken.userId
    }

}

interface JwtData {
    userId: string
    iat: number
    exp: number
}