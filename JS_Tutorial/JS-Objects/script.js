const person = {
    fName: "Bayazidur Rahman",
    lName: "Chowdhury",
    age: 25,
    fullName: function() {
        return this.fName + " " + this.lName;
    }
}

const x = person;
x.age = 26

console.log(person)
document.getElementById("demo").innerHTML = person.fullName();


const person2 = new Object ();

person2.fName = "Shahid";
person2.lName = "Ahmed";
person2.age = 24;
person2.fullName = function() {
    return this.fName + " " + this.lName;
}

console.log(person2)