$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }

    });

  

 // slide-up script
 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});




//typed animation

var typed = new Typed(".typing", {
    strings: ["Film-maker", "Youtuber", "Photographer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

var typed = new Typed (".typing-2", {
    strings: ["film-maker"],
    typeSpeed:500,
    backSpeed:60,
    loop: false,
})



    //owl corausel scrpit
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause:true,

        responsive:{
            0:{
                 items: 1,
                 nav: false
            },

             600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            },   //till this code can make the looping carousel display
        }
    });
});






//footer: hover
$('footer a').hover(function() {
    $('footer').addClass('search-boxshadow');
  }, function() {
    $('footer').removeClass('search-boxshadow')
  });
  
 



//side nav bar

$(document).ready(function(){
    $(".menus li a").click(function(){
        var position =$(this).position();
        var margin =-2
        $(".slider").css({"top":+position.top+margin, "transform": "translateY(0)"});

        $(".menus li a").removeClass("active-icon");
        $(this).addClass("active-icon");

    })
})


  

 
