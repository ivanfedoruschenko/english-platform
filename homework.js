function getHomework ()  {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    renderHomeworkList (data.splice (0,10));
})
    .catch ((error)=>{
        console.error(error)
    })
}

function renderHomeworkList (items) {
    let listElement = document.getElementById ('list');
        items.forEach((homework) => {
            let item = document.createElement('td');
            item.innerText = homework.body;
            item.className = 'homework-item';
            listElement.appendChild(item);
        
        })
}

