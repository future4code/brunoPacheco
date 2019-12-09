import { Transaction } from "./transaction"


export class UserAccount {
    private balance: number
    private cpf: string
    private name: string
    private age: number
    private transactions: Transaction[]

    constructor(balance: number, cpf: string, name: string, age: number, transactions: Transaction[]) {
        this.balance,
        this.cpf,
        this.name,
        this.age,
        this.transactions
    }

    public getBalance(): void {

    }

    public addBalance(): void {

    }


}

