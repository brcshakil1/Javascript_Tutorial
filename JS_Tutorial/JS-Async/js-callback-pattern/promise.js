const payment = true;
const courseCompleted = true;
let marks = 75;

function enroll() {
    console.log('Course enrollment is progress.');

    const promise = new Promise ((resolve, reject) => {

        setTimeout(() => {
            if(payment) {
                resolve();
            }
            else {
                reject("Payment Failed.");
            }
        }, 2000)

    })

    return promise;
}

function progress() {
    console.log("Course on progress...");

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if(courseCompleted) {
                resolve();
            }
            else {
                reject("Course isn\'t completed yet.");
            }
        }, 5000)

    })

    return promise;
}

function result() {
    console.log("You get " + marks + " in the exam.");

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if(marks >= 75) {
                resolve();
            }
            else {
                reject("Sorry, You couldn't get enough marks to get the certificate.");
            }
        }, 3000)

    })

    return promise;
}

function getCertificate() {
    console.log("Your Certificate Is Printing...");

    const promise = new Promise(resolve => {

        setTimeout(() => {
            resolve("Congrats! You got the certificate.")
        }, 1000)

    })

    return promise
}

enroll()
    .then(progress)
    .then(result)
    .then(getCertificate)
    .then(val => console.log(val))
    .catch((err) => console.log(err))