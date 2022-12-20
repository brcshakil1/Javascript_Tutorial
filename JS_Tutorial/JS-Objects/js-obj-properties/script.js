const person = {};
person.fName = "Oman Bin";
person["lName"] = "Abdul Aziz";
person.age = 25;

const x = 'age';

document.getElementById("demo").innerHTML = `${person.fName} ${person.lName} called fifth khalifa in Islam`;
console.log()

delete person.age;
let txt = '';
for(let x in person) {
    txt += person[x];
}

document.getElementById('demo2').innerHTML = txt;