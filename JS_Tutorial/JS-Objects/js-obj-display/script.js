const person = {
    name: 'Shakil',
    age: 25,
    passion: 'Programming'
}

// Display the object properties by name

document.getElementById('demo').innerHTML = 
    (person.name + ' is '
     + person.age + ' years old. He love ' 
     + person.passion).toUpperCase();


// Display the object properties in a loop 

let txt = ''
for(let x in person) {
    txt += person[x]+ ' ';
}

document.getElementById('demo2').innerHTML = txt;

// Display the object using Object.value(); 

const x = Object.values(person);
document.getElementById('demo3').innerHTML = x;


// Display the object using JSON.stringify(); 

document.getElementById('demo4').innerHTML = JSON.stringify(person);