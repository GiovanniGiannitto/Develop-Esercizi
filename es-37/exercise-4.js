class BankAccount {
    myMoney = 0
    constructor(money) {
        this.myMoney = money;
    }
    deposit(cash) {
        return this.myMoney += cash;  
    }
    withdraw(cash) {
        return this.myMoney -= cash;
    }
    view() {
        console.log(this.myMoney);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();



