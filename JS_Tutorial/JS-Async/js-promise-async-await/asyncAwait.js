async function display() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("I Love You!")
        }, 2000);
    })

    document.getElementById("demo").innerHTML = await promise;
}

display()