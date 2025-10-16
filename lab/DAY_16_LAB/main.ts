import { CheckingAccount } from "./CheckingAccount";
import{ SavingAccount } from "./SavingAccount";
import { BankManager } from "./BankManager";

const savingAccount = new SavingAccount("Teo", "VCB12345678", 10000);
const checkingAccount = new CheckingAccount("Ti", "VCB87654321", 16000);

const bankManager = new BankManager();
bankManager.addAccount(savingAccount);
bankManager.addAccount(checkingAccount);

console.log("--- Performing Transactions ---");
bankManager.depositToAccount("VCB12345678", 500);
bankManager.withdrawFromAccount("VCB12345678", 400);

bankManager.depositToAccount("VCB87654321", 100);
bankManager.withdrawFromAccount("VCB87654321", 16051);
bankManager.withdrawFromAccount("VCB87654321", 16050);

bankManager.displayAllBalances();