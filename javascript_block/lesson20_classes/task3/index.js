export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }

    this._balance -= amount;
  }
}

// test

// const wallet1 = new Wallet();

// console.log(wallet1.getBalance());
// wallet1.deposit(50);
// console.log(wallet1.getBalance());
// wallet1.withdraw(150);
// wallet1.withdraw(15);
// console.log(wallet1.getBalance());
