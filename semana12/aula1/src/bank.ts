import { UserAccount } from './userAccount';

export class Bank {
    accounts: UserAccount[]

    constructor() {
        this.accounts = []
    }

    createAccount(UserAccount: UserAccount): void {
        if (UserAccount.age < 18) {
            console.log("Você deve ser maior de idade para abrir uma conta")
            return
        }
        this.accounts.push(UserAccount)
        console.log("A conta foi criada com sucesso!")
    }

}

