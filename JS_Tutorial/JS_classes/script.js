// class Person {
//     constructor(fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname; 
//         this.age = 25;
//         this.gender = "male";
//     }
//     fullName () {
//         return this.firstName + " " + this.lastName
//     }
// }

// const myself = new Person ('bayazid', 'chowdhury');
// myself.school = "Bhangarhat Govt Primary School.";

// console.log(myself.fullName(), myself.age, myself.gender, myself.school);


// Class Inheritance

class Parent {
    constructor(father, mother) {
        this.fatherName = father;
        this.motherName = mother;
    }
    parentInfo () {
        return this.fatherName + " and " + this.motherName + ' are my parents.';
    }
}

class Myself extends Parent {
    constructor(father, mother, name){
        super(father, mother);
        this.name = name;
    }
    show () {
        return this.parentInfo() + ' ' + 'Ooooh! myself ' +  this.name
    }
}

const result = new Myself('Zillur Rahman', 'Nurjahan Begum', 'Bayazid');

document.getElementById('demo').innerHTML = result.show();