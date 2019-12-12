import { Dish } from './dish';
import { brigadeiro, pudim } from './dessert';
import { feijoada, arroz } from './saltydish';
import { Cashier } from './cashier';

const menu = [feijoada, arroz, brigadeiro, pudim];

console.log(menu)

const cashier = new Cashier("Bruno",500)

cashier.sayJob();
console.log(cashier.bill([feijoada, arroz,pudim]))