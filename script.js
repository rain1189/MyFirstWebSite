function toNight() {
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="lightgrey";
    ats = document.querySelectorAll('a');
    ats.forEach(function(a) {
        a.style.color="lightblue"
    })
}

function toDay() {
    document.querySelector('body').style.backgroundColor=null;
    document.querySelector('body').style.color=null;
    ats = document.querySelectorAll('a');
    ats.forEach(function(a) {
        a.style.color=null
    })
}
