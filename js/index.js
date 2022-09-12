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
                }, 5000);
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
                }, 5000);
            }
        }
    }

})



