const text = 'I am practicing RegExp, RegExp and RegExp';
const text2 = '123456789';

// const result = text.search("pra");
// const result = text.search(/exp/i);
// const result = text.search(/Exp/g);
// const result = text.replace(/RegExp/g, "Javascript");
// const result = text.replace(/regExp/i, "Javascript");
// const result = text.replace(/regExp/gi, "Javascript");
const result = text.match(/[amx]/gi);
const result2 = text2.match(/[1-5]/g);
console.log(result2)
console.log(result)