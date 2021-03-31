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
        $('body').removeClass('hidecook');
    });

    // .cookies-section
    setTimeout(function () {
        $('.cookies-section').fadeIn();
        if ($('*').is('.mainnav, .mainslider .swiper-button-next, .mainslider .swiper-button-prev, .mainslider .swiper-pagination')) {
            $('body').addClass('hidecook');
        }
    }, 2000);

    // VISIT US
    if ($('*').is('.swiper-containerv')) {


        var mySwiper = undefined;
        function initSwiper() {
            var screenWidth = $(window).width();
            if (screenWidth > 1024 && mySwiper == undefined) {
                mySwiper = new Swiper('.swiper-containerv', {
                    // slidesPerView: 1,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    // centeredSlides: true,
                    speed: 1000,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }

                });
            } else if (screenWidth < 1025 && mySwiper != undefined) {
                mySwiper.destroy();
                mySwiper = undefined;
                jQuery('.swiper-wrapper').removeAttr('style');
                jQuery('.swiper-slide').removeAttr('style');
            }
        }

        //Swiper plugin initialization
        initSwiper();

        //Swiper plugin initialization on window resize
        $(window).on('resize', function () {
            initSwiper();
        });

    }
    var windowWidth = $(window).width();
    var containerWidth = $('.container-fluid').width();
    var paddingWidth = (windowWidth - containerWidth) / 2;
    if ($(window).width() > 1024 && $(window).width() < 1200) {
        $('.visitslide-wrap .swiper-containerv').css('padding-left', paddingWidth)

    }

    $(function () {
        $("#toup").bind('click', function (e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 2000);
        });
    });





});