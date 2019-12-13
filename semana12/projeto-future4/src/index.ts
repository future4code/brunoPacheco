import { Student } from './student'
import { Teacher } from './teacher'
import { Specialty } from './specialty'
import { WebMission } from './webMission'

const prof1:Teacher = new Teacher("umjão","umjão@gmail.com",21,8,1990,[Specialty.Js,Specialty.Css,Specialty.Html])
console.log(prof1)
console.log()

const newton:WebMission = new WebMission("21-08-2019","21-08-2020",[],[],"newton")
console.log(newton)
console.log()

const jao:any = new Student("jão","jão@gmail.com",10,10,1990,newton)
console.log(jao)
console.log()
