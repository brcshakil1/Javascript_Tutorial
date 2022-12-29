console.log(window.innerHeight);

document.getElementById("btn").addEventListener("click", () => {
    history.back();
})

console.log(
    navigator, 
    ", The navigator cookieEnable",navigator.cookieEnabled,
    ", Application name of the browser", navigator.appName,
    ", Application code name of the browser is ", navigator.appCodeName,
    ", navigator.product returns the product name of the browser engine", navigator.product
    );

    console.log(document.cookie)