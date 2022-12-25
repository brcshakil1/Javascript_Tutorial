const payment = true;
const courseCompleted = false;
let marks = 90;

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
        }, 3000)

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
        }, 2000)

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


async function course() {
    try {
        await enroll();
        await progress();
        await result();
        const message = await getCertificate();
        console.log(message)
    }
    catch(err) {
        console.log(err)
    }

}

course()