// function display(something) {
//     document.getElementById('demo').innerHTML = something;
// }

// function calculator(num1, num2, callback) {
//     let sum = num1 + num2;

//     if(callback) callback(sum); 

//     return sum
// }

// calculator(45, 45, display)


function display() {
    document.getElementById("demo").innerHTML = "I Love You!"
}

setTimeout(display, 2000);

// setInterval()

let myInterval = setInterval(myFunction, 1000)

function myFunction() {
    let date = new Date();

    document.getElementById("demo2").innerHTML = 
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds() 
}

document.getElementById('btn').addEventListener("click", () => {

        myInterval ? clearInterval(myInterval) : myInterval
    
})
