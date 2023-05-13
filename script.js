function toNight() {
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="lightgrey";
    a들 = document.querySelectorAll('a');
    a들.forEach(function(a) {
        a.style.color="lightblue"
    })
}

function toDay() {
    document.querySelector('body').style.backgroundColor=null;
    document.querySelector('body').style.color=null;
    a들 = document.querySelectorAll('a');
    a들.forEach(function(a) {
        a.style.color=null
    })
}
