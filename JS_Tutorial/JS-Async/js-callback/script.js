// const myDisplayFunction = (some) => {
//     document.getElementById("demo").innerHTML = some;
// }

// const firstFunction = () => {
//     myDisplayFunction("Hello!")
// }

// const secondFunction = () => {
//     myDisplayFunction("Goodbye!!")
// }


// secondFunction()
// firstFunction()

// const display = (some) => {
//     document.getElementById("demo").innerHTML = some;
// }

// const calculate = (num1, num2, callback) => {
//     let sum = num1 + num2;
//     if (callback) callback(sum);

//     return sum;
// }

// calculate(8, 9, display);


const myNumbers = [12, -45, 45, 65, -25, 0, 27, -66];

let posNumbers = removeNegNum(myNumbers, (x) => x > 0);

document.getElementById('demo').innerHTML = posNumbers;
console.log(posNumbers)

function removeNegNum (numbers, callback) {
    let myArray = [];
    for(let x of numbers) {
        if(callback(x)) {
            myArray.push(x)
        }
    }
    return myArray
}

