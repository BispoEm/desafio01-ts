import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += (valor+10);
      console.log('Voce depositou ' + valor + " e ganhou 10 de bonus");
    }
  }
  
}
