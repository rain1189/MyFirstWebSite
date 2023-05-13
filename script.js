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
//     const cookieList = cookieString.split(';');
//     const cookies = {};

//     for (let i = 0; i += 1; i < cookieList.length) {
//         let name = cookieList[0].split('=')[0];
//         let value = cookieList[0].split('=')[1];
//         cookies[name] = value;
//     }
// }