// how do you show random number between 1 to 6? 
// Math.random() method
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1, 6));

// how do you show array string alphabetically?
//array.sort()
const students = ['Shakil', 'Arif', 'Epon', 'Emon', 'Shahid', 'Rahi', 'Samad', 'Zakaria', 'Pabel', 'Omar', 'Babar', 'Habib', 'Wahid'];
students.sort();

console.log(students)

// there are a 100 students of a school. you have to show everyone's roll number sequently.
const roll_numbers = [55, 32, 21, 66, 52, 1, 5, 7, 26, 100, 99, 47, 68, 75, 33, 39, 25, 49];
roll_numbers.sort((a, b) => a - b)

console.log(roll_numbers);

// leap year
const isLeapYear = year => {
    return  (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0 
    ? year + " is leap year" 
    : year + " is not leap year"
}

console.log(isLeapYear(2240))

// leap year
const isLeapYear2 = year => {
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return `${year} is Leap Year`;
    }
    else {
        return `${year} is not Leap Year`;
    }
}

const result = isLeapYear2(1900); 
console.log(result)

// how to count vowel from a sentence.
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const countVowels = (sentence) => {
    let count = 0 ;
    let letters = Array.from(sentence);
    letters.forEach(element => {
        if(vowel.includes(element)) {
            count++;
        }
    });
    return count;

}

console.log(countVowels('I love programming'))

// How to show duplicate and unique number from array
// duplicates values
const numbers = [1, 2, 5, 4, 2, 3, 6, 4, 8, 9, 10, 7, 8, 6];
// const duplicates = numbers.filter((val, idx, arr) => {
//     return arr.indexOf(val) !== idx;
// })
// console.log(duplicates.sort())

//unique values
const uniqueValues = numbers.filter((val, idx, arr) => {
    return arr.indexOf(val) === idx;
})
console.log(uniqueValues.sort((a, b) => a - b))
