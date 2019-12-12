import { Employee } from './employee';
import { Dish } from './dish';

export class Cashier extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary)
    }

    //TODO ainda deve-se dividir o valor da sobremesa pelo nro de pedaços 
    public bill(dishes: Dish[]): number {
        let total:number = 0
        for (let dish of dishes) {
            total += dish.price
        }
        return total
    }

    public sayJob(): void {
        console.log("Caixa")
    }
}