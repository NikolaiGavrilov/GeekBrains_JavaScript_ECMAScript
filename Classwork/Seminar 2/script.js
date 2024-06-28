// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке в консоль, 
// включая его имя, возраст и пол. Метод changeName должен 
// изменять имя человека на новое заданное значение.

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// "My name is John. I'm 25 years old and I identify as male."
// person.introduce(); 
// person.changeName("Mike");
// // "My name is Mike. I'm 25 years old and I identify as male."
// person.introduce(); 

const person = {
    name: "John",
    age: 25,
    gender: "male",
    introduce() { // стрелочные функции запоминают this в момент создания !!! 
        // В этот момент ОБЪЕКТ ЕЩЕ НЕ СУЩЕСТВУЕТ
        // console.log(this);  
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newName) { // this определяется в момент вызова
        // console.log(this);
        this.name = newName; 
    }
}

// стрелочные функции запоминают this в момент создания
console.log(person.name);
person.introduce(); // в () ставится this, а стрелочная функция сразу записывает this в момент создания
person.changeName("Mike");
person.introduce();


