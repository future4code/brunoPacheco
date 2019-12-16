import { Mission } from "./mission";
import * as moment from "moment";
import { Teacher } from "./teacher";
import { Student } from "./student";

export class WebMission extends Mission {
    patron:string

    constructor(
        startDate: string,
        endDate:string,
        teacherList: Teacher[],
        studentList: Student[],
        patron:string){
        super(startDate,endDate,teacherList,studentList)
        this.patron=patron
    }
}