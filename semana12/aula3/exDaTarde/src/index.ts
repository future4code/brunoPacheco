import { ResidencialClient } from './residencialClient';
import { TradeClient } from './tradeClient';

const client1 = new ResidencialClient("apartamento", "12345678912", "12345678", "bruno", 100,50)
const client2 = new ResidencialClient("casa", "32165498709", "123456789","jorge",99,75)


console.log(client1)
console.log(`O cliente ${client1.clientName} vai pagar R$${client1.calculateBill()}`)
console.log()
console.log(client2)
console.log(`O cliente ${client2.clientName} vai pagar R$${client2.calculateBill()}`)
console.log()

const client11= new TradeClient("lojinha","431287651234","12345654","Lojinha do Jão",88,150)
const client22= new TradeClient("lojinha","431287651234","12345654","Lanchonete do Jão",88,250)
console.log(client11)
console.log(`O cliente ${client11.clientName} vai pagar R$${client11.calculateBill()}`)
console.log()
console.log(client22)
console.log(`O cliente ${client22.clientName} vai pagar R$${client22.calculateBill()}`)
console.log()