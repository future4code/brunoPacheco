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

*/

import * as moment from "moment";
moment.locale("pt-br")

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

