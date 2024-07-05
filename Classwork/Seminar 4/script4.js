// Необходимо получить список пользователей с сервера, отсортировать их
// в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
// на странице данный список пользователей.
// API: https://jsonplaceholder.typicode.com/users

const url = 'https://jsonplaceholder.typicode.com/users';

async function loadData(url) {           // САМАЯ АКТУАЛЬНАЯ ЗАПИСЬ
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Сервер ответил ошибкой');
    }
    return response.json();
}

const ulEl = document.createElement('ul');
document.body.appendChild(ulEl);

loadData(url).then((data) => {
    // const sortedData = data.toSorted((a, b) => {
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     if (a.name < b.name) {
    //         return -1;
    //     } 
    //     return 0;
    // });
    const sortedData = data.toSorted((a, b) => a.name.localeCompare(b.name)); // не меняеть исходный массив ,а sort() меняет массив
    sortedData.forEach(el => {

        ulEl.insertAdjacentHTML('beforeend', `
        <li>${el.name}</li>
    `);
    });

}).catch((error) => {
    alert(`Ахтунг, ошибка ${error.message}`);
})