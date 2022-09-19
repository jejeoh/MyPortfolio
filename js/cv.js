window.scroll({
    top: 120
});
var page = 1;
var bon = true;


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    window.scroll({
        top: 120
    });
    if(value != 120 && bon){
        
        if(value > 120){
            if(page != 6){
                page++;
                console.log(page);
                bon = false;
                let sld = document.getElementById(page);
                let act = document.querySelector(".act");
                act.classList.toggle('act');
                sld.classList.toggle('act');
                setTimeout(function(){
                    bon = true;
                }, 1000);
            }

        }
        if(value < 120){
            if(page != 1){
                page--;
                console.log(page);
                bon = false;
                let sld = document.getElementById(page);
                let act = document.querySelector(".act");
                act.classList.toggle('act');
                sld.classList.toggle('act');
                setTimeout(function(){
                    bon = true;
                }, 1000);
            }
        }
    }

})
let one = document.getElementById("10");
let two = document.getElementById("20");
let tree = document.getElementById("30");
let four = document.getElementById("40");
let five = document.getElementById("50");

one.onclick = function(){
    let act = document.querySelector(".act");
    act.classList.toggle('act');
    document.getElementById("1").classList.toggle('act');
    page = 1;
}
two.onclick = function(){
    let act = document.querySelector(".act");
    act.classList.toggle('act');
    document.getElementById("2").classList.toggle('act');
    page = 2;
}
tree.onclick = function(){
    let act = document.querySelector(".act");
    act.classList.toggle('act');
    document.getElementById("3").classList.toggle('act');
    page = 3;
}
four.onclick = function(){
    let act = document.querySelector(".act");
    act.classList.toggle('act');
    document.getElementById("4").classList.toggle('act');
    page = 4;
}
five.onclick = function(){
    let act = document.querySelector(".act");
    act.classList.toggle('act');
    document.getElementById("5").classList.toggle('act');
    page = 5;
}


