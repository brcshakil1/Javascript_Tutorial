function Person(first, last, age) {
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.name = function () {
        return this.fName + ' ' + this.lName;
    }
}

const myFather = new Person ('Zillur Rahman', 'Chowdhury', 57);
myFather.relation = 'father'
const myMother = new Person ('Nurjahan', 'Begum', 44);
myMother.relation = 'mother'

function getParents(id, obj) {
    document.getElementById(id).innerHTML = obj.fName + ' ' 
    + obj.lName + ' is ' 
    + obj.age + ' years old. '
    + obj.name()
    + ' is my '
    + obj.relation
}

getParents('demo', myFather);
getParents('demo2', myMother);

console.log(myFather.name())


let x1 = "";      // string 
let x2 = 0;       // number
let x3 = false;   // boolean
const x4 = {};    // Object object
const x5 = [];    // Array object
const x6 = /()/;  // RegExp object
const x7 = function(){};  // function

document.getElementById("demo3").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";
