// BANK APPLICATION USING Closure

function createBankAccount(name) {
  let balance = 0;

  function checkBal() {
    console.log(`Hi ${name} your current balance now is : ${balance}`);
  }

  function depositAmount(amount) {
    balance += amount;
    console.log("Successfully deposited : " + amount);
  }

  function withdrawAmount(amount) {
    if (amount > balance) {
      console.log(
        "You cannot withdraw an amount greater than your current balance"
      );
      return;
    }

    balance -= amount;
    console.log("Successfully withdrew : " + amount);
  }

  return {
    checkBal,
    depositAmount,
    withdrawAmount,
  };
}

const newBankAccount = createBankAccount("Kim");

newBankAccount.checkBal();
newBankAccount.depositAmount(200);
newBankAccount.checkBal();
newBankAccount.withdrawAmount(300);
newBankAccount.checkBal();
newBankAccount.withdrawAmount(100);
newBankAccount.checkBal();
