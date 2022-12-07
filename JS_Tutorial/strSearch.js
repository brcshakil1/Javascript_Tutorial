// indexOf()

const mySelf = "Hello! I'm Bayazid from Bangladesh. I am a programmer and I am learning web development. Insha'Allah as soon as possible, I will prove myself.";
const findIndex = mySelf.indexOf("am") ;
console.log(findIndex);

// lastIndexOf()

const str = 'I am a programmer. I like programmer. I want to be a good programmer ';
const findLastIndex = str.lastIndexOf('programmer');
console.log(findLastIndex);

// search()

const str2 = 'I am a programmer. I like programmer. I want to be a good programmer ';
const search = str2.search('programmer');

console.log(search)

//search() with RegExp

const str3 = 'I am a programmer. I like programmer. I want to be a good programmer ';
const search2 = str2.search(/Programmer/i);

console.log(search2)