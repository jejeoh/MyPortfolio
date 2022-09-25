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
            if(page != 5){
                page++;
                console.log(page);
                bon = false;
                let sld = document.querySelector(".slid:nth-child(" + page + ")");
                let act = document.querySelector(".act");
                act.classList.toggle('act');
                sld.classList.toggle('act');
                setTimeout(function(){
                    bon = true;
                }, 2000);
            }

        }
        if(value < 120){
            if(page != 1){
                page--;
                console.log(page);
                bon = false;
                let sld = document.querySelector(".slid:nth-child(" + page + ")");
                let act = document.querySelector(".act");
                act.classList.toggle('act');
                sld.classList.toggle('act');
                setTimeout(function(){
                    bon = true;
                }, 2000);
            }
        }
    }

})


var curseur = document.getElementById('cursor1');
var centreYcurseur = parseInt(getComputedStyle(curseur, null).height) / 2;
var centreXcurseur = parseInt(getComputedStyle(curseur, null).width) / 2;

window.addEventListener('mousemove', e => {
  curseur.style.left = e.pageX - centreXcurseur + "px"
    curseur.style.top = e.pageY - centreYcurseur - 120 + "px"

})



