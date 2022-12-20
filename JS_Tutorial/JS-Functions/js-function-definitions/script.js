// Declaration Functions
function myFunction(a, b) {
    return a *b;
}
const result = myFunction(3, 7);
document.getElementById("demo").innerHTML = result;

// Expression Functions

const x = function(a, b) { return a * b} ;
const result2 = x(4, 8);
document.getElementById("demo2").innerHTML = result2;


// Function() Constructor
const myFunction2 = new Function ("a", "b", "return a * b");

const m = myFunction2(2, 3);
console.log(m);

// Function Hoisting 
myself("I am Bayazid. I am a programmer.")

function myself(self) {

    console.log(self, arguments.length)
}

// Self-invoking Function
(function () {
    console.log('I am invoking myself')
}) ();

// Functions are object

