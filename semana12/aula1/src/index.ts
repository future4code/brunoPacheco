import { Bank } from './bank';
import { UserAccount } from './userAccount';


const conta1:UserAccount = new UserAccount(0, "123456789", "joao", 17);
const conta2:UserAccount = new UserAccount(0, "987654321", "bruno", 20);

const Accounts:Bank = new Bank()
Accounts.createAccount(conta2)

