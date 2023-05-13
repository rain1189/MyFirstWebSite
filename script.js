function toNight() {
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('body').style.color="lightgrey";
    as = document.querySelectorAll('a');
    as.forEach(function(a) {
        a.style.color="lightblue"
    })
}

function toDay() {
    document.querySelector('body').style.backgroundColor=null;
    document.querySelector('body').style.color=null;
    as = document.querySelectorAll('a');
    as.forEach(function(a) {
        a.style.color=null
    })
}
