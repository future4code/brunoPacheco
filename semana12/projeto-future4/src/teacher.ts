import { User } from "./user";
import * as moment from "moment";

export class Teacher implements User {
    name: string;
    email: string;
    birthDate: moment.Moment;
    especialty: string;

    constructor(
        name: string,
        email: string,
        birthDate: moment.Moment,
        especialty: string,
    ) {
        this.name = name,
        this.email = email,
        this.birthDate = birthDate,
        this.especialty = especialty
    }
    
}