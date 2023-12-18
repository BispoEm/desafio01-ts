import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName());
console.log(peopleAccount.getDoc_id());
peopleAccount.deposit(300)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(150)
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName());
companyAccount.deposit(100)
console.log(companyAccount.getBalance())
companyAccount.withdraw(50)
console.log(companyAccount.getBalance())

const bonusAccount: BonusAccount = new BonusAccount("Bispo", 12);
console.log(bonusAccount.getName());
bonusAccount.deposit(100)
console.log(bonusAccount.getBalance());
bonusAccount.withdraw(100)
console.log(bonusAccount.getBalance());
