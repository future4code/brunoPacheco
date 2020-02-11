import { User } from "../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<void>;
    getAllUsers(): Promise<User[]>;
    verifyUserExists(id: string): Promise<boolean>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id:string):Promise<User>;
    updatePassword(id: string, newPassword: string): Promise<void>;
}