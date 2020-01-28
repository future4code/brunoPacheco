import { User } from "../../entities/user";

export interface GetAllUsersGateway {
    getAllUsers(): Promise<User[]>;
}