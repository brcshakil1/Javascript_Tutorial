const myErrFunction = () => {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x === "") throw "Empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw {
            message: "Too low number",
            name: "LowErr"
        };
        if(x > 10) throw {
            message: "Too high number",
            name: "HighErr"
        }
        
    }
    catch(err) {
        message.innerHTML = err.message;
        console.log(err)
    }
    finally {
        document.getElementById("demo").value = "";
    }
}