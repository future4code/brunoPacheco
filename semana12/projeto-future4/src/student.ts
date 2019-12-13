import { User } from "./user";
import { Mission } from "./mission";

export class Student implements User {
    name: string;
    email: string;
    birthDate: Date;
    team: Mission;

    constructor(name: string, email: string, dia:number, mes:number,ano: number, team: Mission) {
        this.name = name,
        this.email = email,
        this.birthDate = new Date(`${ano}/${mes}/${dia}`),
        this.team = team
    }

}