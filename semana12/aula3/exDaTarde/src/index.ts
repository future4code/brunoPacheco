import { ResidencialClient } from './residencialClient';

const client1 = new ResidencialClient("apartamento", "12345678912", "12345678", "bruno", 100,50)
const client2 = new ResidencialClient("casa", "32165498709", "123456789","jorge",99,75)


console.log(client1)
console.log(`O cliente ${client1.clientName} vai pagar R$${client1.calculateBill()}`)
console.log()
console.log(client2)
console.log(`O cliente ${client2.clientName} vai pagar R$${client2.calculateBill()}`)
console.log()

