if (document.cookie.includes('dark')) {
    toDark()
}

function toDark() {
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="lightgrey";
    ats = document.querySelectorAll('a');
    ats.forEach(function(a) {
        a.style.color="lightblue"
    })
    document.cookie = "theme=dark"
}

function toLight() {
    document.querySelector('body').style.backgroundColor=null;
    document.querySelector('body').style.color=null;
    ats = document.querySelectorAll('a');
    ats.forEach(function(a) {
        a.style.color=null
    })
    document.cookie = "theme=light"
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