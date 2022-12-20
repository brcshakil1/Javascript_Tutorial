let data = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(data)
console.log(obj)
document.getElementById("demo").innerHTML = 
 obj.employees[0].firstName + " " + obj.employees[1].lastName;

const person = {
    worker: [
        {firstName: 'Shakil', lastName: 'Chowdhury'},
        {firstName: 'Shahid', lastName: 'Ahmed'}
    ]
}

const str = JSON.stringify(person);
console.log(str)