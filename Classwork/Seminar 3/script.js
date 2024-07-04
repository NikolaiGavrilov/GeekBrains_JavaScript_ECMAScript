// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
    // return obj.__proto__;
    const arr = [];
    while (Object.getPrototypeOf(obj)) {
        arr.push(Object.getPrototypeOf(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return arr;
}
function User(name) {
    this.name = name;
}

console.log(getPrototypeChain(User));

// User.prototype = {
//     sayHello() {
//         console.log('ВСЕМ ПРИВЕТ');
//     }
// }
// const user = new User("Валера");
// console.log(user);
// console.dir(User);
// User.prototype;



// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:


function Person(name, age) {
    this.userName = name;
    this.userAge = age;

}
Person.prototype = {
    introduce() {
        console.log(`Меня зовут ${this.userName} и мне ${this.userAge} лет.`);
    }
}

const person1 = new Person("John", 25);
person1.introduce(); // "Меня зовут John и мне 25 лет."

// Полный курс:
// 1 - https://youtu.be/MbRmNGKXVOg
// 2 - https://youtu.be/dUlEIwEDkV4
// 3 - https://youtu.be/7qpbKy9XS48
// 4 - https://youtu.be/Su9Gml6xUUU
// 5 - https://youtu.be/lXJH1l9s214
// 6 - https://youtu.be/qdyJkc-BjQA
// 7 - https://youtu.be/fGTG-mrGpFY
// 8 - https://youtu.be/lXbF_Jta6vQ



// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму.
// 3. getBalance(): возвращает текущий баланс счета.

// В случае неверно переданных значений, либо невозможности провести 
// операцию, должны выводиться соответсвующие сообщения.

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

BankAccount.prototype = {
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
    },
    withdraw(amount) {
        if (!Number.isFinite(amount)) {
            throw new Error(`Ошибка, вы ввели не число`);
        }
        this.checkKopeyki(amount);
        if (amount <= 0) {
            throw new Error(`Wrong deposit amount, must be a positive number.`);
        }
        this.balance -= amount;
    },
    getBalance() {
        return this.balance;
    },
    checkKopeyki(amount) {
        const arr = amount.toString().split('.');
        if (arr[1]?.length > 2) { // не будет выполнять последовательность если не было значения до оператора значение было Null или undefined
            throw new Error(`Bad boy. Wrong format.`);
        }
    }
}

console.log(BankAccount.prototype);
const bankAcc = new BankAccount(1312313, 2300); // new создает объект -> ставит протип -> возвращает объект
console.log(bankAcc.balance);
console.log(bankAcc.accountNumber);


// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.

// Создайте класс Dog, который наследуется от класса Animal. Для
// класса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// Пример использования:
// const animal1 = new Animal("Животное");
// animal1.speak(); // "Животное издает звук."
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // "Бобик издает звук."
// console.log(dog1.breed); // "Дворняжка"
// dog1.fetch(); // "Бобик принес мяч."

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // "Животное издает звук."
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // "Бобик издает звук."
console.log(dog1.breed); // "Дворняжка"
dog1.fetch(); // "Бобик принес мяч."

// Функция принмает несколько секунд, возврщает время в формате "20:05:01"


function secondsToHms(second) {
    second = Number(second);
    const h = Math.floor(second / 3600);
    const m = Math.floor(second % 3600 / 60);
    const s = Math.floor(second % 3600 % 60);

    return `${h.toString().padStart(2, 0)}:${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`; 
}

console.log(secondsToHms(20));


https://learn.javascript.ru/error-handling
https://learn.javascript.ru/async
https://learn.javascript.ru/network