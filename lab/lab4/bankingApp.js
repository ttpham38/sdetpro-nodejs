const readline = require("readline-sync");

let baseAccount = {
  accountName: "Tung",
  accountNumber: "9962755538",
  routingNumber: "VCB",
  balance: 325000,
};

let account1 = JSON.parse(JSON.stringify(baseAccount));
account1.accountNumber = "9704050001234568";
account1.accountName = "Tun";

let account2 = JSON.parse(JSON.stringify(baseAccount));
account2.accountNumber = "9704050001234570"; 
account2.accountName = "Ty";                 

let accounts = [baseAccount, account1, account2];

let choice;
do {
  showMenu();
  choice = Number(readline.question(`Please input your choice: `));
  handleUserChoice(choice);
} while (choice !== 0);

function handleUserChoice(choice) {
  switch (choice) {
    case 1:
      handleFindAccount(accounts);
      break;
    case 2:
      handleWithdraw(accounts);
      break;
    case 0:
      console.log("Exiting program...");
      break;
    default:
      console.log("Please re-select the menu!");
      break;
  }
}

function showMenu() {
  console.log(`\n=== Banking application ===`);
  console.log(`1. Find an account`);
  console.log(`2. Update balance`);
  console.log(`0. Exit the program`);
}

function findAccountByNumber(accounts) {
  let userInputAccountNumber = readline.question(
    `Please input your account number: `
  );
  return accounts.find(account => account.accountNumber === userInputAccountNumber);
}

function handleFindAccount(accounts) {
  let findAccount = findAccountByNumber(accounts);
  if (findAccount) {
    console.log(`Account Name: ${findAccount.accountName}`);
    console.log(`Balance: ${findAccount.balance}`);
  } else {
    console.log("Account not found.");
  }
}

function handleWithdraw(accounts) {
  let findAccount = findAccountByNumber(accounts);
  if (!findAccount) {
    console.log("Account not found");
    return;
  }

  let amount = Number(readline.question(`Please input the amount to withdraw: `));
  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount. Please enter a number greater than 0.");
    return;
  }

  if (amount > findAccount.balance) {
    console.log(`Not enough money to withdraw!`);
  } else {
    findAccount.balance -= amount;
    console.log(`Withdraw successful. New balance: ${findAccount.balance}`);
  }
}
