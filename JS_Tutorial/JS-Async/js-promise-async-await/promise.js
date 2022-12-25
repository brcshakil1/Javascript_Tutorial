// function display(something) {

//     document.getElementById("demo").innerHTML = something;

// }

// let promise = new Promise((resolve, reject) => {

//     let x = 0;

//     if(x === 0) {
//         resolve("OK");
//     }
//     else {
//         reject("Error occurred")
//     }

// })

// promise.then(
//     (value) => display(value),
//     (error) => display(error)
// )

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("I want to be a good programmer!")
    }, 2000)
})

promise.then(
    function(value) {
        document.getElementById("demo").innerHTML = value;
    }
)