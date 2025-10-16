import { BankAccount } from "./BankAccount";

export class BankManager {
  private accounts: BankAccount[] = [];

  public addAccount(account: BankAccount): void {
    this.accounts.push(account);
  }

  public findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(acc => acc.getAccountNumber() === accountNumber);
  }

  public depositToAccount(accountNumber: string, amount: number): void {
    const account = this.findAccount(accountNumber);
    if (account) {
      account.deposit(amount);
      console.log(`Deposited ${amount} to ${account.getName()}. New balance: ${account.getBalance()}`);
    } else {
      console.log(`Account ${accountNumber} not found.`);
    }
  }

  public withdrawFromAccount(accountNumber: string, amount: number): void {
    const account = this.findAccount(accountNumber);
    if (account) {
      const success = account.withdraw(amount);
      if (success) {
        console.log(`Withdrew ${amount} from ${account.getName()}. New balance: ${account.getBalance()}`);
      }
    } else {
      console.log(`Account ${accountNumber} not found.`);
    }
  }
  
  public displayAllBalances(): void {
      console.log("\n--- All Account Balances ---");
      this.accounts.forEach(acc => {
          console.log(`Account: ${acc.getName()} (${acc.getAccountNumber()}), Balance: ${acc.getBalance()}`);
      });
  }
}