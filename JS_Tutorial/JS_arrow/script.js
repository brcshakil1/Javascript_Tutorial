let hello = "";

hello = () => {
    document.getElementById('demo').innerHTML += this
}
window.addEventListener("load", hello);



document.getElementById('btn').addEventListener('click', hello)

let hlw = '';

hlw = function () {
    document.getElementById('demo2').innerHTML += this
}

window.addEventListener("load", hlw);

document.getElementById('btn2').addEventListener('click', hlw)