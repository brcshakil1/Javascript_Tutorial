function myFunction() {
    const inpObj = document.getElementById('id1');
    if(!inpObj.validity.rangeUnderflow) {
        document.getElementById("demo").innerHTML = 
        inpObj.setCustomValidity("Input number is less than requirement");
    } else {
        document.getElementById("demo").innerHTML = "Input Ok"
    }
}