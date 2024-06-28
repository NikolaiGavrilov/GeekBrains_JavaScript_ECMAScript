// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета, 
// withdraw(amount) для снятия денег со счета и метод printBalance, 
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое 
// содержит название банка.

class BankAccount {
    static bankName = "GBank"; // это то что есть у всех (как у человека 2 руки), добавляем свойство для объекта а не для класса
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        // if (typeof amount !== 'number') {
        if (!Number.isFinite(amount)) {
            throw new Error(`Ошибка, вы ввели не число`);
        }
        this.checkKopeyki(amount);
        if (amount <= 0) {
            throw new Error(`Wrong deposit amount, must be a positive number.`);
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (typeof amount === 'number') {
            this.checkKopeyki(amount);
            if (amount > this.balance) {
                throw new Error(`Insufficient funds in account ${this.accountNumber}`);
            } else if (amount < 0) {
                throw new Error(`Wrong deposit amount, must be a positive number.`);
            } else {
                this.balance -= amount;
            }
        } else {
            throw new Error(`Ошибка, вы ввели не число`);
        }
    }

    printBalance() {
        console.log(`${BankAccount.bankName} account ${this.accountNumber} balance: ${this.balance}`);
    }

    checkKopeyki(amount) {
        const arr = amount.toString().split('.');
        if (arr[1]?.length > 2) { // не будет выполнять последовательность если не было значения до оператора значение было Null или undefined
            throw new Error(`Bad boy. Wrong format.`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(322.23);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance(); // GBank account "1234567890" balance: 1300