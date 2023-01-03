const displayAPI = document.querySelector('.display');

// added event listener
async function getData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    const user = data[randomTodos(data)]
    displayAPI.innerHTML = `
    user id: ${user.id} <br />
    user title: ${user.title} 
    `;
}

const randomTodos = (array) => {
    return Math.floor(Math.random() * array.length)
}