function login() {
    const login = document.getElementById("login")
    const password = document.getElementById("password")
    if (login.value === '0' && password.value === '0') {
        window.location.href = "/english-platform/main-page.html"
    }
}

function getHomework() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            renderHomeworkList(data.splice(0, 10));
        })
        .catch((error) => {
            console.error(error)
        })
}

function renderHomeworkList(items) {
    let listElement = document.getElementById('homework-list');
    items.forEach((homework) => {
        let item = document.createElement('li');
        item.innerText = homework.title;
        item.className = 'homework-item';
        listElement.appendChild(item);
    })
}
