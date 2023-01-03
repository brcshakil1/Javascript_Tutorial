const displayAPI = document.querySelector('.display');

// added event listener
const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            const user = data[randomTodos(data)];
            displayAPI.innerHTML = `
            user id: ${user.id} <br />
            user title: ${user.title} 

            `;
        })
}

const randomTodos = (array) => {
    return Math.floor(Math.random() * array.length)
}