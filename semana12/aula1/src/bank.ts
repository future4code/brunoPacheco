import { JSONFileManager } from './JSONFileManager';
import { UserAccount } from './userAccount';




export class Bank {
    private accounts: UserAccount[]
    private fileManager: JSONFileManager

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts,
            this.fileManager
    }

    public createAccount(): void {
        console.error("Erro, você é menor de idade")
        
    }

    public getAllAccounts(): UserAccount[] {

    }

    public getAccountByCpf(): UserAccount {

    }

    public saveAccounts(): void {

    }
}