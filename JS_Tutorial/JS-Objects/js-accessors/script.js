// Get and set methods
const person = {
    fName: "Bayazidur Rahman",
    lName: "Chowdhury",
    age: 25,
    eyeColor: 'Dark Brown',
    language: '',
    get fullName () {
        return this.fName + ' ' + this.lName;
    }
}

// set accessors

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
};

person2.lang = 'english';

console.log(person2.language)
document.getElementById('demo').innerHTML = (person.fullName + " is a guy. He can speak " + person2.language).toUpperCase();
  