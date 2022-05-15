function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function checkCookie() {
    let lightmode = getCookie('lightmode');
    let light = document.querySelector(".start");
    let icon = document.querySelector(".icon");
    if (lightmode == 'dark') {
        light.classList.remove("light");
        light.classList.add("dark");
        icon.classList.remove("darkicon");
    } else {
        light.classList.remove("dark");
        light.classList.add("light");
        icon.classList.remove("darkicon");
    }
}

console.log("Liste des cookies :" + document.cookie);

function darkmode() {
    let light = document.querySelector(".start");
    const checkbox = document.getElementById("lightmode");
    let icon = document.querySelector(".icon");

    setCookie('lightmode', 'light', 365);

    checkbox.addEventListener("change", function () {
        localStorage.setItem("lightmode", this.checked);
        if (this.checked) {
            light.classList.remove("light");
            light.classList.add("dark");
        } else {
            light.classList.remove("dark");
            light.classList.add("light");
        }
    });
}

if (valueOf(localStorage.key(0)) == true) {

}