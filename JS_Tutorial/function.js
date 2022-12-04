const x = 12;
const y = 25;

function Equal(){
    return x + y;
}

const sum = Equal();
console.log(sum);

const doubleIt = (num) => {
    return num * 2;
}

const double = doubleIt(5);
console.log(double);

const numbers = [12, 13, 14, 15, 16];
numbers.map(num => console.log(num * 2));