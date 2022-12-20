// default parameter

function myFunction(x, y = x) {
    // if(y === undefined) {
    //     y = 7
    // }
    return x * y
}
const result = myFunction(5);
console.log(result)

// rest parameter

function restParameter(...args) {
    let sum = 1;
    // for (let i = 0; i < args.length; i++) {
    //     const val = args[i];
    //     sum = sum + val;
    // }
    // return sum
    for(let arg of args) sum *= arg;
    return sum
}
const rlt = restParameter(5, 10, 15, 20, 25, 30, 35);

console.log(rlt)