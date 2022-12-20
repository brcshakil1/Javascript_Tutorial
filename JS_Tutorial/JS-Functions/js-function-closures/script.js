// // local scope
// function myFunction() {
//     let a = 5;
//     console.log(a * a);
// }

// myFunction();
// myFunction();
// myFunction();


// // global scope
// let a = 6;
// function myFunction2() {
//     console.log(a * a)
// }

// myFunction2();


//A Counter Dilemma

// let counter = 0;

// function add() {
//     counter += 1;
// }

// add();
// add();
// add();
// counter = 7;
// document.getElementById('demo').innerHTML = "The counter is: " + counter;

// 
// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = add();
// }


// // Nested Function
// function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
// }


// Function Closure
const add = (function() {
    let counter = 0;
    return function () {
        counter += 1;
        return counter
    }
}) ();

console.dir(add())
function myFunction() {

    document.getElementById("demo").innerHTML = add();

}

















