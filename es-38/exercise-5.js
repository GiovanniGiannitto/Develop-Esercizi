class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get initialamount() {
    return this.#amount;
  }

  set initialamount(initialAmount) {
    this.#amount = initialAmount;
  }
}

class BankAccountVip extends BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    super(initialAmount); 
  }
  deposit(amount) { 
    if(this.initialamount >= 1000) {
      amount += (amount * 3) / 100;
      this.initialamount += amount; 
    }
  }
  withdraw(amount) {
    super.withdraw(amount);
  }
  view() {
    super.view();
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();