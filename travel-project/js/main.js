
//================= owl-carousel ====================

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    startPosition: 1,
    items: 3,
    responsive : {
        // breakpoint from 0 up
        0 : {
            margin: 10,
            items: 1,
        },
        // breakpoint from 321 up
        321 : {
            margin: 10,
            items: 2,
        },
        // breakpoint from 590 up
        590 : {
            margin: 20,
            items: 3,
        },
        // breakpoint from 850 up
        850 : {
            startPosition: 1,
            margin: 20,
            items: 3,
        },
        // breakpoint from 1000 up
        1000 : {
            margin: 20,
            items: 3, 
        },
        // breakpoint from 1200 up
        1200 : {
            margin: 30, 
        }
    }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//================ burger menu =======================

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');


navBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav__mobile');
    document.body.classList.toggle('no-scroll');
}