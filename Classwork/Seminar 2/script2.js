class Person {
    name = 'John';
    age = 25;
    gender = 'male';

    introduce() { // создана 1 раз (так и нужно)
        console.log(`My name is ${this.name}.I'm ${this.age} years old and I identify as ${this.gender}.`);
    }
    changeName = (newName) => { // будет каждый раз создаваться заново (кушает ресурсы)
        this.name = newName;
    }
    changeAge = (newAge) => { // будет каждый раз создаваться заново (кушает ресурсы)
        this.age = newAge;
    }
}

const johnPerson = new Person(); 
console.log(johnPerson);
johnPerson.introduce();
johnPerson.changeName('Ivan');
johnPerson.introduce();