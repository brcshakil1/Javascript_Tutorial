/* global scope declared outside of function. the global
scope's variable can accessed anywhere of script or function */

const x = 5;
const y = 10;

const myFunction = () => {
    return x + y;
}

const z = y - x;

console.log(myFunction(), z)

