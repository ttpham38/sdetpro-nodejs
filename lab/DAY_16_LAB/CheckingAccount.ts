import { BankAccount } from "./BankAccount";

export class CheckingAccount extends BankAccount {
  private minimumBalance: number = 50;
  
  public withdraw(amount: number): boolean {
    if (amount > 0 && this.balance - amount >= this.minimumBalance) {
      this.balance -= amount;
      return true;
    } else {
      console.log(`Withdrawal failed from Checking Account: Insufficient funds or minimum balance rule.`);
      return false;
    }
  }
}