import { UserAccount } from './userAccount';
import { JSONFileManager } from './JSONFileManager';

export class Bank {
    accounts: UserAccount[]
    fileManager:JSONFileManager

    constructor(fileName:string) {
        this.accounts = [];
        this.fileManager = new JSONFileManager(fileName);
    }

    createAccount(conta:{cpf:string,name:string,age:number}): void {

        if (conta.age < 18) {
            console.log("Você deve ser maior de idade para abrir uma conta")
            return
        } else {
            this.accounts.push(conta)
            console.log("A conta foi criada com sucesso!")
            this.fileManager.saveToJSON(conta)
        }

    }

}

