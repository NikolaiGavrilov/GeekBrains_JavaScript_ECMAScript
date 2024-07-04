// Домашнее задание:
// Задание 1: "Управление персоналом компании"

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee("John Smith");
// employee.displayInfo(); // "Name: John Smith"

// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo(); // "Name: John Doe, Department: Sales"

class Employee {
    name;

    constructor(nameOfEmployee) {
        this.name = nameOfEmployee;
    }

    displayInfo() {
        console.log(`Сотрудник ${this.name}`);
    }
}

class Manager extends Employee {
    department;

    constructor(name, departmentOfManager) {
        super(name);
        this.department = departmentOfManager;
    }

    displayInfo() {
        console.log(`Менеджер ${this.name}, Отдел: ${this.department}`);
    }
}

const employee = new Employee("Агата Коровина");
employee.displayInfo();
const manager1 = new Manager("Ян Зарубин", "Бюро переводов");
manager1.displayInfo();
const manager2 = new Manager("Николай Гаврилов", "ИТ");
manager2.displayInfo();

// Задание 2: "Управление списком заказов"

// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования:
// const order = new Order(12345);

// const product1 = new Product("Phone", 500, 2);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100, 1);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 1100

class Product {
    name;
    price;
    quantity;

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    id;
    products = [];

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let totalprice = 0;
        for (let i = 0; i < this.products.length; i++) {
            totalprice += (this.products[i].price * this.products[i].quantity);
        }
        return totalprice;
    }
}

const order = new Order(54321);

const product1 = new Product("Доширак говяжий", 65, 3);
order.addProduct(product1);

const product2 = new Product("Молоко Амка", 99, 1);
order.addProduct(product2);

const product3 = new Product("Бульмени со сливочным маслом", 119, 2);
order.addProduct(product3);

const product4 = new Product("Лист поликарбоната 6м x 2м", 3800, 1);
order.addProduct(product4);

console.log(`Сумма заказа: ${order.getTotalPrice()} руб`);

// Ребята задача для всех, кто хочет подумать :)
// у нас имеется переменная и 2 кнопки "plus" и "minus", 
// переменная содержит слово, например const text = "word"; 
// теперь нужно выводить данное слово таким образом, 
// чтобы при клике на кнопку "plus" выводилась первая буква "w" 
// нажали еще раз, вывелась вторая буква "o" и тд,
// если нажали на кнопку "minus" она должна показывать предыдущую букву,
// результат такой:
// нажали "plus" - w
// нажали "plus" - о
// нажали "plus" - r

// нажали "minus" - о
// нажали "minus" - w

const text = "WORD";
document.body.insertAdjacentHTML('afterbegin', `
<div class="content">
<span class="text">${text}</span>
<button class="plus">plus</button>
<button class="minus">minus</button>
</div>`);

buttonPlus = document.querySelector('.plus');
buttonMinus = document.querySelector('.minus');

class Counter {
    count = -1;

    increaseCounter() {
        this.count += 1;
    }

    decreaseCounter() {
        this.count -= 1;
    }

    getCounter() {
        return this.count;
    }
    setCounter(counter) {
        this.count = counter;
    }
}

let counter = new Counter();
const wordLetters = text.split('');

function giveMeALetter(wordLetters) {
    console.log(wordLetters[counter.getCounter()]);
}

buttonPlus.addEventListener('click', function (e) {

    if (counter.getCounter() < wordLetters.length - 1) {
        counter.increaseCounter();
    } else {
        counter.setCounter(0);
    }
    giveMeALetter(wordLetters);
});

buttonMinus.addEventListener('click', function (e) {
    if (counter.getCounter() > 0) {
        counter.decreaseCounter();
    } else {
        counter.setCounter(wordLetters.length - 1);
    }
    giveMeALetter(wordLetters);
});