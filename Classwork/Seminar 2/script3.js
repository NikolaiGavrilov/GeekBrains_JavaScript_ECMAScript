// 1. Создайте объект animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Одолжите метод eat() из объекта animal для 
// объекта dog, чтобы вывести сообщение о том, что собака ест.
 
// dog.eat(); // "Rex eating."

const animal = {
    name: "Собакен",
    eat() {
        console.log(`${this.name} кушац :))`);
    },
}

const dog = {
    name: "Барбос",
    bark() {
        console.log(`${this.name} тявкает :))`);
    },
}

console.log(animal.name);
animal.eat();
dog.eat = animal.eat; // присвоение нового свойства
dog.bark();
dog.eat();
console.log(dog);