function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    // name=Shakil; username=Bayazid
    // Array [ "name=Shakil", " username=Bayazid" ]
    // name=Shakil 
    //  username=Bayazid

    let name = cname + "=";
    let ca = document.cookie.split(";")
    
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while(c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if(c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

function checkCookie(cname, exdays) {
    let cookieName = getCookie(cname);
    if (cookieName != "") {
     alert("Welcome again " + cookieName);
    } else {
      n = prompt("Please enter your name:", "");
      if (n != "" && n != null) {
        setCookie(cname, n, exdays);
      }
    }
  }
