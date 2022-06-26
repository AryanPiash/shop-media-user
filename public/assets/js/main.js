
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".partners-area-slider").owlCarousel({
            items: 5,
            nav: false,
            dot: false,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            mouseDrag: true,
            singleItem: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 3,
                    margin: 30,
                },
                575: {
                    items: 4,
                    margin: 25,
                },
                768: {
                    items: 4,
                    margin: 35,
                },
                991: {
                    items: 5,
                    margin: 40,
                }
            }

        });






        $(".company-slider-wrapper").owlCarousel({
            items: 5,
            nav: false,
            dot: false,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            mouseDrag: true,
            singleItem: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 3,
                    margin: 30,
                },
                575: {
                    items: 4,
                    margin: 30,
                },
                768: {
                    items: 4,
                    margin: 35,
                },
                991: {
                    items: 5,
                    margin: 40,
                }
            }


        });


    });

}(jQuery));