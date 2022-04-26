# Classes - Exercise 5
Definire la classe BankAccountVip che estendendo dalla classe BankAccount, oltre a consentire tutte le operazioni di quest'ultima, permette all'utente di ottenere un interesse del 3% sull'importo depositato, ma solo se nel bilancio del conto è presente una cifra maggiore o uguale a 1000€

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

  get setAmount() {
    return this.#amount;
  }
  set setAmount(initialAmount) {
    this.#amount = initialAmount;
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }
  deposit(amount) {
    if (this.setAmount >= 1000) {
      amount += (amount * 3) / 100;
      this.setAmount += amount;
    } else this.setAmount += amount;
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();