import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount {
  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    } else {
      console.log(`Withdrawal failed from Saving Account: Not enough money!`);
      return false;
    }
  }
}