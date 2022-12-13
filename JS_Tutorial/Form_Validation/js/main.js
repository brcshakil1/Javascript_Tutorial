const formValidation = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const ePattern = /^\S+@\S+\.\S+$/;
    const pPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    const result = 
    (ePattern.test(email)) && (pPattern.test(password)) ? 'email and password validation successful' : alert("something went wrong. please try again") 
    console.log(result)
}