/**
 * Created by storyteller on 12/19/14.
 */
;(function($) {
    $(document).ready(function() {
        $(".banner").backstretch(["img/b1.jpg", "img/b16.jpg", "img/b20.jpg"], {
            duration : 3000,
            fade : 750
        });

        /* ============================================
         Testimonials
         ==============================================*/
        $('.clients-say').owlCarousel({
            loop : true,
            /*nav:true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],*/
            autoHeight : true,
            items : 1,
            smartSpeed : 1000,
            /*autoplay : true,*/
            autoplayTimeout : 6000,
            /*autoplayHoverPause: true*/
            responsive : {
                320 : {
                    stagePadding : 20,
                    margin : 20
                },
                640 : {
                    stagePadding : 60,
                    margin : 60
                },
                1024 : {
                    stagePadding : 100,
                    margin : 100
                }
            }
        });

    });
})(jQuery);
