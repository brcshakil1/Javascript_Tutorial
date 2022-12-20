function myFunction() {
    return this
}
var x = this;

console.log(myFunction())
console.log(x)

const obj = {
    fName: 'Shakil',
    lName: 'Chowdhury',
    fullName: function() {
        return this.fName + ' ' + this.lName;
    }
}

console.log(obj.fullName());

function MyObj(arg1, arg2) {
    this.fName = arg1;
    this.lName = arg2;
}

const obj1 = new MyObj('Bayazid', 'Chowdhury');

console.log(obj1)

