import { User } from "./user";
import { Specialty } from "./specialty";

export class Teacher implements User {
    name: string;
    email: string;
    birthDate: Date;
    specialty: Specialty[];

    constructor(
        name: string,
        email: string,
        dia: number,
        mes: number,
        ano: number,
        specialty: Specialty[],
    ) {
        this.name = name,
            this.email = email,
            this.birthDate = new Date(`${dia}/${mes}/${ano}`),
            this.specialty = specialty
    }

}