const str = 'Shahadat, Shakil, Shahid';

// string.slice() method

const sliceStr = str.slice(9); // slice(start, end)
const slice2 = str.slice(-9, 20); // counting start from end
const substring = str.substring(9)

// console.log(sliceStr)
//  console.log(slice2)
// console.log(substring)

// replace()

const text = "Please visit our Bangladesh";
const nextText = text.replace("Bangladesh", "Sylhet");

console.log(nextText)