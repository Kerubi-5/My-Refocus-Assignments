// Bank app using call backs

function createBankAccount(
  name,
  checkBalCallback,
  depositCallback,
  withdrawCallback
) {
  let balance = 0;

  function checkBal() {
    checkBalCallback(`Hi ${name} your current balance now is : ${balance}`);
  }

  function depositAmount(amount) {
    balance = depositCallback(balance, amount);
  }

  function withdrawAmount(amount) {
    balance = withdrawCallback(balance, amount);
  }

  return {
    checkBal,
    depositAmount,
    withdrawAmount,
  };
}

function checkBalCallback(balance) {
  console.log(`Your current balance now is : ${balance}`);
}

function depositCallback(balance, amount) {
  console.log("Successfully deposited : " + amount);
  return balance + amount;
}

function withdrawCallback(balance, amount) {
  if (amount > balance) {
    console.log(
      "You cannot withdraw an amount greater than your current balance"
    );
    return balance;
  }

  console.log("Successfully withdrew : " + amount);
  return balance - amount;
}

const newBankAccount = createBankAccount(
  "Kim",
  checkBalCallback,
  depositCallback,
  withdrawCallback
);

newBankAccount.checkBal();
newBankAccount.depositAmount(200);
newBankAccount.checkBal();
newBankAccount.withdrawAmount(300);
newBankAccount.checkBal();
newBankAccount.withdrawAmount(100);
newBankAccount.checkBal();
