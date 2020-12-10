

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 10,
            loop: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:{
                0: {
                    items:2,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
         });
    });