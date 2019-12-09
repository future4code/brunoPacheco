import { JSONFileManager } from './JSONFileManager';
import { UserAccount } from './userAccount';

export class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts=accounts,
        this.fileManager=fileManager
    }

    public createAccount(age): void {
        if(age <18){
            console.log("Você deve ser maior de idade para abrir uma conta")
            return
        }

    }

}

