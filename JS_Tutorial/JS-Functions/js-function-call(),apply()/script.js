// with call() method an object can use a method belonging to another object.

const person = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = {
    firstName: "Ariq",
    lastName: "Chowdhury"
}

const person2 = {
    firstName: "Shahi",
    lastName: "Khan"
}

// document.getElementById("demo").innerHTML = person.fullName.call(person1);
// document.getElementById("demo2").innerHTML = person.fullName.call(person2)


// call() method argument

const personInfo = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName }. He live in the city ${city} of the country ${country}`
    }
}
// call() method
document.getElementById('demo').innerHTML = personInfo.fullName.call(person1, 'Toronto', 'Canada');
document.getElementById('demo2').innerHTML = personInfo.fullName.call(person2, 'New York', 'America');


//apply() method

document.getElementById('demo3').innerHTML = personInfo.fullName.apply(person1, ['lamu', 'bangladesh' ]);
document.getElementById('demo4').innerHTML = personInfo.fullName.apply(person2, ['rajnagar', 'bangladesh']);

const arr = [12, 45,121200, 56, 798, 132, 546];
console.log(Math.max.apply([null, arr]));