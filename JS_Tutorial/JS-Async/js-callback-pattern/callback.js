const payment = true;
const courseCompleted = true;
let marks = 80;


function enroll(callback) {
    console.log("Course enrollment is progress.");

    setTimeout(function () {
        if(payment) {
            callback();
        }
        else {
            console.log("Payment is Failed.");
        }
    }, 2000)
}

function progress (callback) {
    console.log("Course on progress...")

    setTimeout(function() {
        if(courseCompleted) {
            callback();
        } 
        else {
            console.log("Course isn\'t complete yet.");
        }
    }, 3000)
}

function result (callback) {
    console.log("Your total marks " + marks)

    setTimeout(function() {
        if(marks >= 70) {
            callback();
        }
        else {
            console.log("You don\'t have enough marks to get the certificate.");
        }
    }, 2000)
}

function getCertificate () {
    console.log("Your certificate is printing. Please wait for a moment.");

    setTimeout(function() {
        console.log("Congratulation You get the Certificate!!");
    }, 1000)
}

enroll(function() {
    progress(function() {
        result(getCertificate)
    })
});
