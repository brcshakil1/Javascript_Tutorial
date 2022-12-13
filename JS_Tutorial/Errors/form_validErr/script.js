const myErrorFunction = () => {
    let message = document.getElementById("p01");
    message.innerHTML = '';
    let num = document.getElementById("inputNum").value;
    
    try {
        if(num === '') throw "empty";

        if(num < 12) throw {
            name: 'LowError',
            message: 'The input number ' + num + ' is too low'
        }
        
        if(isNaN(num)) throw {
            name : 'NaNError',
            message: num + ' is not a number'
        }
        num = Number(num);

        if(num > 20) throw {
            name: 'HighError',
            message: 'The input number ' + num + ' is too heigh'
        }
    }

    catch(err) {
        message.innerHTML = err.message;
        console.log(err.name)
    }

    finally {
        document.getElementById("inputNum").value = '';
    }

} 