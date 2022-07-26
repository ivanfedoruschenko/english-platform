
const embedData = (data) => {
    console.log(data)
    let container = document.getElementById('app');
    data.forEach((todo, index) => {
        let item = document.createElement('div');
        item.style.fontSize = '1rem';
        item.style.marginBottom = '1rem';
        item.innerText = `${index + 1}. ${todo.title}`;
        container.appendChild(item);
    })
}
const url = `https://jsonplaceholder.typicode.com/todos`;
fetch(url, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => embedData(data))
    .catch((error) => console.error(error))