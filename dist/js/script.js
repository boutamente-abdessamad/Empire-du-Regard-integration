
/****************************************/
/************ Main Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try{

        /* do your magic here*/

        $('.toggle-menu-mobile').click(function(e) {
            e.preventDefault();
            $('body').toggleClass('menu-in');
        })

        // best-sellers script 

        // home script 
        var bsSlider = $('.bs-slider');
    
        if (bsSlider.length) {
            bsSlider.slick({
                infinite: true,
                autoplay: true,
                dots: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                appendDots: $('.bs-slider-dots'),
                fade: false,
                responsive: [
                    {
                    breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                    breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                    breakpoint: 480,
                        settings: {
                            centerMode: true,
                            infinite: true,
                            centerPadding: '60px',
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $('.bs-prev').click(function (e) {
                e.preventDefault();
                bsSlider.slick('slickPrev');
            });
            $('.bs-next').click(function (e) {
                e.preventDefault();
                bsSlider.slick('slickNext');
            });
        }
        let containerWidth = $('.best-sellers>.container').outerWidth();
        let viewportWidth = $('body').outerWidth();
        let containerGutters = ((viewportWidth -  containerWidth)/2)-46;
        $('.bs-slider').show();
        $('.bs-slider-dots').css({
            width : bsSlider.outerWidth() + containerGutters + "px"
        })
        bsSlider.css({
            width : bsSlider.outerWidth() + containerGutters + "px"
        })

        // menus scripts 
        $('.has-children').click(function(e){
            e.preventDefault();
            $(this).toggleClass('in');
        } )
        $('.shop-toggle-menu-mobile').click(function(e){
            e.preventDefault();
            $('.mobile-menu').toggleClass('menu-shop-in');
        } )
        $('.services-toggle-menu-mobile').click(function(e){
            e.preventDefault();
            $('.mobile-menu').toggleClass('menu-services-in');
        } )
        $('.menu-mobile-back').click(function(e){
            e.preventDefault();
            $('.mobile-menu').removeClass('menu-shop-in');
            $('.mobile-menu').removeClass('menu-services-in');
        } )

        $('.shop-submenu-toggle').click(function(e){
            e.preventDefault();
            $('body').toggleClass('shop-submenu-in');
            $('body').removeClass('services-submenu-in');
        } )

        $('.services-submenu-toggle').click(function(e){
            e.preventDefault();
            $('body').removeClass('shop-submenu-in');
            $('body').toggleClass('services-submenu-in');
        } )

        if ($(window).scrollTop() > $('.ui-header').outerHeight()) {
            $('body').addClass('is-scrolling');
        } else {
            $('body').removeClass('is-scrolling');
        }

         var lastScrollTop = 0;
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            if ($(window).scrollTop() > $('.ui-header').outerHeight() && st<lastScrollTop) {
                $('body').addClass('is-scrolling');
                $('header').removeClass('hide-header');
                if ($('.collections-block-content').length && !$('body.ui-mobile').length) {
                    $('.collections-block-content').css({
                        top : "90px"
                    });
                }
            } else if($(window).scrollTop() > $('.ui-header').outerHeight() && st> lastScrollTop) {
                $('body').removeClass('is-scrolling');
                $('header').addClass('hide-header');
                if ($('.collections-block-content').length && !$('body.ui-mobile').length) {
                    $('.collections-block-content').css({
                        top : "0px"
                    });
                }
            }else if($(window).scrollTop() > $('.ui-header').outerHeight() && st<lastScrollTop) {
                $('body').addClass('is-scrolling');
                $('header').removeClass('hide-header');
                if ($('.collections-block-content').length && !$('body.ui-mobile').length) {
                    $('.collections-block-content').css({
                        top : "90px"
                    });
                }
            }else{
                $('body').removeClass('is-scrolling');
                $('header').removeClass('hide-header');
                if ($('.collections-block-content').length && !$('body.ui-mobile').length) {
                      $('.collections-block-content').css({
                          top : "90px"
                      });
                }
            }
            lastScrollTop = st;
        });

       
       

    }catch(e){
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})