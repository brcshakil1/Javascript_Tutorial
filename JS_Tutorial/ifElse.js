/* 
if(condition) {
    // executed block of code if the condition is true
}
else {
    // executed block pf code if the condition is false
}
*/

const hour = new Date().getHours();
let greeting;

if (hour < 8) {
    greeting = "Good Morning";
} else{
    greeting = "Good Afternoon";
}

console.log(greeting)