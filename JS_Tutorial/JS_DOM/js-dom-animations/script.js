const myMove = () => {
    let id = null;
    const el = document.getElementById("animation");
    let pos = 0;

    clearInterval(id);
    id = setInterval(frame, 5)

    function frame () {
        if(pos == 350) {
            clearInterval(id);
        }
        else {
            pos++ ;
            el.style.top = pos + "px";
            el.style.left = pos + "px";
        }
    }
}