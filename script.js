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
    let enlargeCount = 1;
    image.height *= 2;
    const enlargeImage = setInterval(() => {
        image.height *= 2;
        enlargeCount++;
        if (enlargeCount === 6) {
            clearInterval(enlargeImage);
            let reduceCount = 0;
            const reduceImage = setInterval(() => {
                image.height /= 2;
                reduceCount++;
                if (reduceCount === 6) {
                    clearInterval(reduceImage);
                }
            }, 1000);
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