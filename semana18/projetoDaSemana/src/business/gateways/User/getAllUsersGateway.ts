import { User } from "../../entities/user/user";

export interface GetAllUsersGateway {
    getAllUsers(): Promise<User[]>;
}