import { Mission } from "./mission";
import * as moment from "moment";
import { Teacher } from "./teacher";
import { Student } from "./student";

export class MobileMission extends Mission {
    team:number

    constructor(
        startDate: string,
        endDate: string,
        teacherList: Teacher[],
        studentList: Student[],
        team:number){
        super(startDate,endDate,teacherList,studentList)
        this.team=team
    }
}