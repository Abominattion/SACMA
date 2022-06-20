const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    const btn = document.getElementById('btn-mobile');
    btn.classList.toggle('active');
    const active = btn.classList.contains('active');
}

/////////
const btnMobile2 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu2);

function toggleMenu2(event) {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav-mobile');
    const active = nav.classList.contains('nav-mobile');
}

//////
/////////
const btnMobile3 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu3);

function toggleMenu3(event) {
    const nav = document.getElementById('body');
    nav.classList.toggle('bg-overlay');
    const active = nav.classList.contains('bg-overlay');
}

$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollSmooth", "auto");
    });

});

 // collpase
 $(".j_collapse").click(function () {
    var collapse = $(this);

    if (collapse.find(".j_collapse_box").is(":visible")) {
        collapse.find(".j_collapse_box").slideUp(200);
    } else {
        collapse.parent().find(".j_collapse_box").slideUp(200);
        collapse.find(".j_collapse_box").slideDown(200);
    }
});
