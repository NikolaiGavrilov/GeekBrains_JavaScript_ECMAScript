// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

const createCounter = () => {
    let counterValue = 0;
    const increment = () => {
        return ++counterValue;
    }
    const decrement = () => {
        return --counterValue;
    }
    const getCounterValue = () => {
        return counterValue;
    }
    return { increment, decrement, getCounterValue }
}

let yourCounter = createCounter();
//Возвращаю значение счетчика и вывожу в консоль
console.log("Изначальный счетчик:", yourCounter.getCounterValue());
//Увеличиваю счетчик на три
yourCounter.increment();
yourCounter.increment();
yourCounter.increment();
//Возвращаю значение счетчика и вывожу в консоль
console.log("Счетчик после увеличения:", yourCounter.getCounterValue());
//Уменьшаю значение счетчика на 5 
const numberOfTimesToDecrease = 5;
for (let i = 0; i < numberOfTimesToDecrease; i++) {
    yourCounter.decrement();
}
//Возвращаю значение счетчика и вывожу в консоль
console.log("Счетчик после уменьшения:", yourCounter.getCounterValue());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootEl, className) {
    if (rootEl.hasChildNodes()) {
        if (rootEl.classList.contains(className)) {
            return rootEl;
        }

        let elemFound = null;
        rootEl.childNodes.forEach(child => {
            if (!elemFound && child.nodeType === 1) {
                elemFound = findElementByClass(child, className);
            }
        });
        return elemFound;

    } else {
        throw new Error("Искомый элемент не обнаружен");
    }
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);