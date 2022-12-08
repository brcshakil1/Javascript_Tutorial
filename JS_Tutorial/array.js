const arr = ["shakil", "Bayazid", 'zakaria'];
arr.push("Chowdhury");
arr.unshift("Shahid");
arr[1] = "Rahi" ;
arr.pop();
console.log(arr.length)

// for(let i = 0; i < arr.length; i++ ){
//     const element = arr[i];
//     console.log(element)
// }

// arr.map(item => console.log(item));
let i = 0;
while(i < arr.length) {
    const element = arr[i];
    i ++
    console.log(element)
}