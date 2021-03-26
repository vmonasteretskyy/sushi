$(document).ready(function () {
    // burger
    $('.header-icon-hamburger').click(function () {
        $('.header__menu').toggleClass('show');
        $('.header-icon-hamburger').toggleClass('burger-transform');
    });

    // lang
    $('.header__lang-current').click(function () {
        $(this).next('ul').slideToggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__lang').length) {
            $('.header__lang ul').slideUp();
        }
    });

    // MAIN SLIDER

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    // main page - scroll
    if ($('*').is('.mainnav')) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $('.mainslider .swiper-button-next, .mainslider .swiper-button-prev, .mainslider .swiper-pagination').addClass('hideel');
            } else {
                $('.mainslider .swiper-button-next, .mainslider .swiper-button-prev, .mainslider .swiper-pagination').removeClass('hideel');
            }
        });
    }

    // parallax - menu
    if ($(window).width() > 1024) {
        if ($('*').is('#scene')) {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        }
    }

    // cookies
    $('.close-cookies, .cookies-section a.cookies__ok').click(function () {
        $('.cookies-section').fadeOut();
    });

    // .cookies-section

    setTimeout(function () {
        $('.cookies-section').fadeIn();
    }, 2000);







});