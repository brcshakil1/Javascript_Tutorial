// "use strict";
const person = {
    fName: 'Bayazid',
    lName: 'Chowdhury',
    age: 25,
    id: 5446,
    fullName: function () {
        return this.fName + ' ' + this.lName;
    }
}

const person2 = {
    fName: 'Shahid',
    lName: 'Ahmed'
}

function dash () {
    console.log(this)
}

dash()
console.log(person.fullName());
console.log(person.fullName.call(person2))
console.log(this)