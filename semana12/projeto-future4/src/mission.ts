import * as moment from "moment";
import { Teacher } from "./teacher";
import { Student } from "./student";

export abstract class Mission {
    startDate: moment.Moment;
    endDate: moment.Moment;
    teacherList: Teacher[];
    studentList: Student[];

    constructor(startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher[], studentList: Student[], ) {
        this.startDate = startDate
        this.endDate = endDate
        this.teacherList = []
        this.studentList = []
    }
}