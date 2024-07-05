// Домашнее задание

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в 
// качестве аргумента и использует fetch для получения данных о пользователе с заданным ID 
// с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о 
// пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен 
// быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json()
//  и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет
// промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(id) {
    const url = `https://reqres.in/api/users?page=1`;
    const usersEl = document.querySelector('.users');
    const response = await fetch(url);
    if (response.status_code === 200) {
        throw new Error('Возникла непредвиденная ошибка');
    }
    response.json().then((data) => {
        let elemFound = false;
        data.data.forEach(element => {
            if (element.id === id) {
                console.log(element);
                usersEl.insertAdjacentHTML('beforeend', `
                <div class="user__content">
                <img src="${element.avatar}" alt="аватарка юзера ${element.id}">
                <span class="user_info">${element.first_name} ${element.last_name} </span>
                <span class="user_info">User ID: ${element.id}</span>
                <span class="user_info">${element.email}</span>
                </div> `);
                elemFound = true;
            }
        });
        if (elemFound === false) {
            throw new Error(`Не найден пользователь с id ${id}`)
        }
    }).catch((error) => {
        console.log(`Ошибка: ${error.message} `);
        usersEl.insertAdjacentHTML('afterbegin', `
                <div class="user__content">
                <span class="user_info" style="color: red;">Не найден <br>пользователь с id ${id}</span>
                </div> `);

    })
}

getUserData(1);
getUserData(2);
getUserData(3);
getUserData(4);
getUserData(5);
// getUserData(25); // ЕСЛИ РАСКОММЕНТИТЬ, выскочит ошибка, поскольку пользователя с таким ID нет


// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// Пример использования функции
// const user = {
//     "name": "John Doe",
//     "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
// Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует 
// объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). 
// Если запрос успешен (с кодом 201), функция разрешает промис. 
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// ВАРИАНТ РЕШЕНИЯ 1 НИЖЕ (КАК БЫЛО СКАЗАНО НА СЕМИНАРЕ, УСТАРЕВШИЙ)

function saveUserData(user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/users');
    xhr.send(JSON.stringify(user));
    xhr.onload = function () {
        if (xhr.status != 201) {
            console.log(`Статус-код ${xhr.status}. Возникла непредвиденная ошибка.`);
        } else {
            console.log(`Статус-код ${xhr.status}: запрос выполнен успешно и привёл к записи данных пользователя`);
            console.log(xhr.responseText);
        }
    }
}

const user = {
    "name": "John Doe",
    "job": "unknown"
};

saveUserData(user);

// ВАРИАНТ РЕШЕНИЯ 2 НИЖЕ (КАК БЫЛО СКАЗАНО НА СЕМИНАРЕ, БОЛЕЕ ОПТИМАЛЬНЫЙ)


async function saveUserDataAsync(user) {
    const url = 'https://reqres.in/api/users'
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        console.log(response.status);
        throw new Error(`Статус-код ${response.status}. Возникла непредвиденная ошибка.`);
    } else {
        console.log(`Статус-код ${response.status}: запрос выполнен успешно и привёл к записи данных пользователя`);
        response.json().then((data) => {
            console.log(data);
        });
    }
}

const user2 = {
    "name": "John Doe",
    "job": "unknown"
};

saveUserDataAsync(user2)


// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

document.body.insertAdjacentHTML('beforeend', `
<div class="changeColor">
<div id="change2sec"></div>
<div id="change5sec"></div>
<div id="change7sec"></div>
</div>`);

function changeStyleDelayed(id, delayTime) {
    setTimeout(() => {
        document.getElementById(id).style.backgroundColor = "purple";
    }, delayTime);
}

changeStyleDelayed("change2sec", 2000);
changeStyleDelayed("change5sec", 5000);
changeStyleDelayed("change7sec", 7000);


