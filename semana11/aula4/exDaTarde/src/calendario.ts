import * as moment from "moment";
//moment.locale("pt-br")

/*const quedaDaConstantinopla = new Date("1453-05-29")
console.log(quedaDaConstantinopla.getTime())

const revolucaoFrancesa = new Date("1789-07-14")
console.log(revolucaoFrancesa.getTime())

const proclamacaoDaRepublica = new Date("1889-11-15")
console.log(proclamacaoDaRepublica.getTime())

const aniversarioDoGoli = new Date("1996-08-15")
console.log(aniversarioDoGoli.getTime())

const horaZero = new Date("1970=01-01")
console.log(horaZero.getTime())

const now = moment();
//12/05/2019
const formatDate = now.format("DD/MM/YYYY")
console.log(formatDate);

console.log("Em dias da semana")

const formatDateWeek = now.format("dddd")
console.log(formatDateWeek)
console.log(now.format('ddd'))
console.log(now.format('dd'))

console.log("Agora em meses")
console.log("MMMM")
console.log(now.format("MMMM DD[th], YYYY"))
console.log(now.format("MMMM DD[th], YY"))
console.log(now.format("HH mm ss"))

console.log("Agora com fuso horário")

console.log(now.format("DD/MM/YYYY HH:mm:ss"))

const yesterday = moment("04-12-2019", "DD-MM-YYYY")
console.log(yesterday)
console.log(yesterday.format("DD/MM/YYYY - dddd"))

//ex2

const a = moment("28/07/2019 15:30", "DD/MM/YYYY HH:mm")
console.log(a.format("DD/MM/YYYY HH:mm"))
const formatDate = new Date("2019-06-28")
console.log("O seu timestamp é ", formatDate.getTime())


console.log(a.format("DD/MM/YYYY é dddd").toLowerCase())
//toLowerCase()



const conversaoEmMili:number = 60*60*1000 

const dataNow = new Date()
const timestamp = dataNow.getTime()
const data2= new Date(timestamp+conversaoEmMili)

console.log(dataNow)
console.log(data2)

const conversãoDiaEmMili:number = 24*69*69*1000
const data3= new Date(timestamp+conversãoDiaEmMili)

console.log(data3)

*/

const hoursInMili = 60*60*1000
const dayInMili= 24*60*60*1000

const date1 = new Date("2018-11-01")
const date2 = new Date("2019-11-01")
const diff = date2.getTime() - date1.getTime()
const diffHours = diff / hoursInMili
const diffDays = diff / dayInMili
console.log(diffHours)
console.log(diffDays)
