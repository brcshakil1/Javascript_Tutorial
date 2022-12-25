



function myFunction() {
    //get the value of the input field with id="numb"
    const num = document.getElementById("numb").value;

      // If num is Not a Number or less than one or greater than 10
    let text = "";

    if(isNaN(num) || num < 1 || num >10) {
        text = "Input isn\'t valid."
    }
    else {
        text = "Input is OK."
    }
    document.getElementById("demo").innerHTML = text;

}


function validation() {
    let x = document.forms["myForm"]["fname"].value;
    
    if(x === "") {
        alert("Name has to be in input field.");
        return false;
    }

    document.getElementById("demo2").innerHTML = x;
}