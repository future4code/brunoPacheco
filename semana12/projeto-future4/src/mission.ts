import * as moment from "moment";
import { Teacher } from "./teacher";
import { Student } from "./student";

export abstract class Mission {
    startDate: string;
    endDate: string;
    teacherList: Teacher[];
    studentList: Student[];

    constructor(startDate: string, endDate: string, teacherList: Teacher[], studentList: Student[], ) {
        this.startDate = startDate
        this.endDate = endDate
        this.teacherList = []
        this.studentList = []
    }
}