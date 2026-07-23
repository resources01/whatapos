(function ($) {
    "use strict";


    //scroll đóngthanh nav
    $(window).scroll(function() {
        $('.navbar-collapse').removeClass('show');
    });

    //xoay 180 
    $(document).ready(function () {
        $('.front').click(function() {
            var show =  $(this).parent();
            show.toggleClass('show');
            show.find('*').toggleClass('show');
        });   
    });
          
    //social
    $(document).ready(function(){
        $('.slider-social').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1          
        });
    });

    //before-after-pic
    // $(window).load(function() {
    //     $(".before-after").twentytwenty();
    // });
    //before-after-pic
    $(document).ready(function() {
        $(".before-after").twentytwenty();
    });

    //Promotion
    $(document).ready(function(){
        $('.slider-promo').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 300,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
    });

    $(document).ready(function(){
        $('.slider-scroll').slick({
            rtl: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0, // Không có thời gian chờ
            speed: 3000, // Tốc độ chuyển động
            cssEase: 'linear', // Chuyển động mượt mà
            variableWidth: true,
        });
    });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass("show");
            $('.btn-call').addClass("show");
            $('.btn-message').addClass("show");
        } else {
            $('.back-to-top').removeClass("show");
            $('.btn-call').removeClass("show");
            $('.btn-message').removeClass("show");
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        rtl: true,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-3").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-4").owlCarousel({
        loop: true,
        items: 1,
        margin: 25,
        autoWidth: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
    });

    $(".testimonial-carousel-5").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoWidth: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            390:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);

