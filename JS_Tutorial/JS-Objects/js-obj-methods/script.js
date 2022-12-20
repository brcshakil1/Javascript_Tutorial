const person = {
    fName: 'Bayazid',
    lName: 'Chowdhury',
    age: 25,
    getFullName: function() {
        return `${this.fName} ${this.lName} is ${this.age} years old`;
    },
    address: {
        district: "Moulvibazar",
        country: "Bangladesh",
        region: "Asia"
    },
    population: 170000000
}

document.getElementById('demo').innerHTML = person.getFullName().toUpperCase();
console.log(person)