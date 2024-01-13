const body = document.querySelector('body');
const togle = document.querySelector('#togle');
const date = document.querySelector('#date');
const image = document.querySelector('img');

if (document.cookie.includes("dark")) {
    toDark();
}

image.addEventListener('click', handleImageClick)

setInterval(function() {
    date.innerText = Date().slice(0,24);
}, 1000);

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

function handleImageClick() {
    image.height *= 2;
    let changeSizeCount = 1;
    const changeImageSize = setInterval(() => {
        if (changeSizeCount === 5) {
            image.height /= 2;
            changeSizeCount = 10;
        } else if (changeSizeCount === 6) {
            clearInterval(changeImageSize);
        } else if (changeSizeCount < 5) {
            image.height *= 2;
            changeSizeCount++;
        } else {
            image.height /= 2;
            changeSizeCount--;
        }
    }, 1000);
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