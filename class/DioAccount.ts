export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      console.log('Voce depositou '+ valor);
    }
  }

  withdraw = (valor: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= valor) {
        this.balance -= valor;
        console.log('Voce sacou '+ valor);
      } else {
        console.log('Saldo Insuficiente');
      }
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
