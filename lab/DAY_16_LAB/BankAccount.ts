export abstract class BankAccount {
  private accountName: string;
  private accountNumber: string;
  protected balance: number;

  constructor(accountName: string, accountNumber: string, balance: number) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  public getName(): string {
    return this.accountName;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }
  
  public abstract withdraw(amount: number): boolean;
}