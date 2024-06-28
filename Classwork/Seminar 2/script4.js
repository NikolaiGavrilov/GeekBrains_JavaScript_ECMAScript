'use strict';  // строгий режим (меняет поведение JS)

// Создайте обычную функцию add, которая будет складывать this.a и this.b 
// и возвращать значение, которое получим.
// Создать объект, в котором будут свойства `a` и `b`, со значениями в виде 
// чисел (любые значения).
// Необходимо вызвать функцию add так, чтобы она правильно отработала с 
// нашим объектом.

const obj = {
    a: 5,
    b: 6
}

function add () {
    console.log(this);
    return this.a + this.b;
}
// console.log(add());
// a = 5;
console.log(add.call(obj));


// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение в консоль с 
// представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // "My name is John and I'm 25 years old."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const person = new Person("John", 25);
person.introduce();


