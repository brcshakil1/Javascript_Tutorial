const element = document.getElementById("demo");
element.innerHTML = "Hello Programmers!!";

const ele = document.querySelector("#demo2");
ele.innerHTML = "Selected with querySelector.";

const el = document.querySelectorAll(".list");

for(let x of el) {
    x.style.color = 'red';
    x.style.backgroundColor = "#d3afac";
    x.style.padding = '0.5rem';
    x.style.fontSize = '1.2rem'
}

