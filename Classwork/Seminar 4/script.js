// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками.
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);

// Ожидаемый результат:
// "Сообщение 2"
// "Сообщение 1"
// "Сообщение 3"
// "Конец программы"
let counter = 0;
function delayedMessage(message, delay) {
    counter++;
    setTimeout(() => {
        console.log(message, counter);
        counter--;
        if (counter === 0) {
            console.log("Конец программы");
        }
    }, delay);
}

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);



