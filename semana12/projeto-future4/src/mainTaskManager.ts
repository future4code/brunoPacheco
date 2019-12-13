import {Teacher} from './teacher'
import {Specialty} from './specialty'
import { Student } from './student';
import { WebMission } from './webMission';
import { MobileMission } from './mobileMission';


export class Manager {
   teacherList:Teacher[];
   studentList:Student[];
   webMission:WebMission[];
   mobileMission:MobileMission[];

   constructor(){
      this.teacherList=[],
      this.studentList=[],
      this.webMission=[],
      this.mobileMission=[]
   }

   addTeacher(teacher: Teacher) {
      this.teacherList.push(teacher)
      console.log(`O professor ${teacher.name} foi adicionado com sucesso!`)
   }

   addStudent(student:Student) {
      this.studentList.push(student)
      console.log(`O aluno ${student.name} foi adicionado com sucesso!`)
   }

   addWebMission(webMission:WebMission){
      this.webMission.push(webMission)
      console.log(`A turma Dev Full Stack ${webMission.patron} foi adicionada com sucesso!`)
   }
   
   addMobileMission(mobileMission:MobileMission){
      this.mobileMission.push(mobileMission)
      console.log(`A turma Mobile ${mobileMission.team} foi adicionada com sucesso!`)
   }
}

const manager = new Manager()

const newton:WebMission = new WebMission("21-08-2019","21-08-2020",[],[],"Newton")
const umjao: Teacher = new Teacher("Umjão", "umjão@gmail.com", 21, 8, 1990, [Specialty.Js, Specialty.Css, Specialty.Html])
const jao:any = new Student("Jão","jão@gmail.com",10,10,1990,newton)

manager.addTeacher(umjao)
manager.addStudent(jao)
manager.addWebMission(newton)

