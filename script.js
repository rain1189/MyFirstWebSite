const body = document.querySelector('body');
const togle = document.querySelector('#togle');

if (document.cookie.includes("dark")) {
    toDark();
}

function themeChange() {
    if (togle.value === "dark") {
        toDark();
    } else {
        toLight();
    }
}

function toDark() {
    body.style.backgroundColor="black";
    body.style.color="lightgrey";
    togle.value="light";
    document.cookie="theme=dark";   
}

function toLight() {
    body.style.backgroundColor=null;
    body.style.color=null;
    togle.value="dark";    
    document.cookie="theme=light";
}

// function getCookies() {
//     const cookieString = document.cookie;
//     const cookieArray = cookieString.split(';');
//     const cookieDict = {};

//     for (let i = 0; i < cookieArray.length; i++) {
//         let name = cookieArray[i].split('=')[0];
//         let value = cookieArray[i].split('=')[1];
//         cookieDict[name] = value;
//     }

//     return cookieDict;
// }