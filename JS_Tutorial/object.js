const person = {
    fName: 'Bayazidur Rahman',
    lName: 'Chowdhury',
    age: 25,
    fColor: 'Black And White',
    fullName: function(){
        return this.fName + " " + this.lName;
    }
};

person.nickName = 'Shakil';

console.log(person);
console.log(person.age);
console.log(person.nickName);
console.log(person.fullName());

