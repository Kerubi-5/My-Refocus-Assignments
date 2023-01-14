const bankAccount = {
  bankAccountID: 13413,
  accountNumber: 514512696,
  credentials: [
    {
      username: "user1",
      password: "password123",
      pin: 1234,
    },
    {
      username: "john",
      password: "doe123",
      pin: 5678,
    },
    {
      username: "jane",
      password: "doe456",
      pin: 1212,
    },
    {
      username: "jim",
      password: "jim123",
      pin: 2121,
    },
  ],
  balance: 100_000,
  createdAt: Date.now(),
};

const user = {
  bankAccount: bankAccount,
  debitCard: 513515135,
  firstName: "John",
  lastName: "Querobines",
  birthDate: Date.now(),
  validID: [
    {
      type: "passport",
      number: "P123456789",
    },
    {
      type: "driver's license",
      number: "D987654321",
    },
  ],
};

function logIn(credentials, login) {
  return credentials.find(
    (obj) => JSON.stringify(obj) === JSON.stringify(login)
  );
}

function createBankAccount(user) {
  function checkBal(credential) {
    if (logIn(user.bankAccount.credentials, credential)) {
      console.log(
        `Hi ${user.firstName} your current balance now is : ${user.bankAccount.balance}`
      );
    } else {
      console.log("Invalid login");
    }
  }

  function depositAmount(accountNum, amount) {
    if (accountNum === user.bankAccount.accountNumber) {
      user.bankAccount.balance += amount;
      console.log("Successfully deposited : " + amount);
    } else {
      console.log("Invalid account number");
    }
  }

  function withdrawAmount(accountNum, amount) {
    if (accountNum === user.bankAccount.accountNumber) {
      if (amount > user.bankAccount.balance) {
        console.log(
          "You cannot withdraw an amount greater than your current balance"
        );
        return;
      }

      user.bankAccount.balance -= amount;
      console.log("Successfully withdrew : " + amount);
    } else {
      console.log("Invalid account number");
    }
  }

  return {
    checkBal,
    depositAmount,
    withdrawAmount,
  };
}

const newBankAccount = createBankAccount(user);

newBankAccount.checkBal({
  username: "john",
  password: "doe123",
  pin: 5678,
});

newBankAccount.depositAmount(514512696, 2000);

newBankAccount.checkBal({
  username: "john",
  password: "doe123",
  pin: 5678,
});

newBankAccount.withdrawAmount(514512696, 200000);
newBankAccount.withdrawAmount(514512696, 1000);

newBankAccount.checkBal({
  username: "john",
  password: "doe123",
  pin: 5678,
});
