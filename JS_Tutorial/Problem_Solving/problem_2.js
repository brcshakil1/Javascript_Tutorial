// 1. how many times "prophet" word used in the sentence and what is the first position of the word.

/* const sentence = "Our beloved prophet Muhammad (pbuh) was final messenger of Allah. Before our prophet (pbuh) born his father was died and our prophet's (pbuh) mother was died when he was 6 years old. After our prophet's mother died, his grandfather was taking care of him. Allah tested  Prophets with hardship.";

const matches = sentence.match(/prophet/gi);
const occurrences = matches ? matches.length : 0;

let position = sentence.search(/prophet/i);
position = position >= 0 ? position : "no found";
console.log(matches, occurrences, position); */


// 2. input: linearSearch([a, b, c, d, c ], c)
// output: position or 'not found!'
// Implement a function called linearSearch() and solve the problem.

/* const linearSearch = (arr, val) => {
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return "not fount!"
}
const array = ['a', 's', 'd', 'f', 'g', 's'];
const value = 'e';
console.log(linearSearch(array, value)) */


// 3. How to found long string from an array and what will be the string number of the string.

/* const longestString = array => {

    let longString = '';

    for(string of array) {
        if(string.length > longString.length)
            longString = string;
    }
    return [longString, array.indexOf(longString)];
};

console.log(longestString(['Bayazidur Rahman', 'Shahid Ahmed', 'Arif Khan'])) */


// 4. How many number between 1-100 will be divisible by 3, 5 and 3, 5 both?

/* function fizzBuzz(num) {
    for(let i = 1; i <= num; i++){
        if (i % 15 === 0) {
            console.log(i + ' is fizzBuzz')
        }
        else if (i % 5 === 0) {
            console.log(i + ' is buzz')
        }
        else if (i % 3 === 0) {
            console.log(i + ' is fizz')
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz(100) */

// 5. remove falsy values from array.

const arr = ["Shakil", false, 1212, 'abc', undefined, null, true, '', 'yes', 0];

/*const truthyArray = arr.filter((el) => {
    if (el) {
        return true;
    }
    else {
        return false;
    }
});
 */
const truthyArray = arr.filter(Boolean);

console.log(truthyArray)

// remove falsy value from object

const obj = {
    a: 'Shakil',
    b:  false,
    c:  1212,
    d:  'abc',
    e:  undefined,
    f:  null,
    g:  true,
    h: '',
    i: 'yop',
    j: 0

}

const truthyObj = obj => {
    for ( let i in obj) {
        if(!obj[i]) {
            delete obj[i];
        }
    }

    return obj
}

console.log(truthyObj(obj))