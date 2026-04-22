window.initTheme = function ($) {
    'use strict';

    if (!window._themeEventBindingsDone) {
        window._themeEventBindingsDone = true;

        $(document).ready(function(){ 
            // sticky menu===================
            var wind = $(window);
            var sticky = $('#sticky-header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll <100) {
                    sticky.removeClass('sticky-nav');
                } else {
                    sticky.addClass('sticky-nav');
                }
            });
            wind.trigger('scroll');
        });

        // Loder  //
        $(function () {
            $('body').addClass('loaded');
        });

        // scrollUp
        if ($.scrollUp) {
            $.scrollUp({
                scrollText: '<i class="fa fa-angle-up"></i>',
                easingType: 'linear',
                scrollSpeed: 900,
                animation: 'fade'
            });
        }

        // go-top scroll
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });

        $(document).on('click', '.go-top', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 1200);
        });

        // search header
        $(document).on('click', '.search-box-outer', function() {
            $('body').addClass('search-active');
        });
        $(document).on('click', '.close-search', function() {
            $('body').removeClass('search-active');
        });
    }

    // slider Active
    if ($.fn.owlCarousel) {
        $('.slider-list:not(.owl-loaded)').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: false,
            dotsEach:false,
            smartSpeed:3000,
            nav: false,
            navText: ["<i class='bi bi-arrow-right''></i>", "<i class='bi bi-arrow-left''></i>"],
            responsive: {
                0: { items: 1 },
                768: { items: 1 },
                992: { items: 1 },
                1000: { items: 1 },
                1920: { items: 1 }
            }
        });

        // testimonial Active
        $('.testi_list:not(.owl-loaded)').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: true,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
                1000: { items: 3 },
                1920: { items: 3 }
            }
        });
    }

    // WOW active js 
    try {
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    } catch(err) {
        console.warn("WOW initialized failed:", err);
    }

    // counterUp
    if ($.fn.counterUp) {
        $('.counter:not(.counter-loaded)').each(function() {
            $(this).addClass('counter-loaded').counterUp({
                delay: 10,
                time: 1000
            });
        });
    }

    /* Portfolio Isotope  */
    if ($.fn.imagesLoaded) {
        $('.image_load:not(.isotope-loaded)').addClass('isotope-loaded').imagesLoaded(function () {
            if ($.fn.isotope) {
                var $portfolio = $('.image_load');
                $portfolio.isotope({
                    itemSelector: '.grid-item',
                    filter: '*',
                    resizesContainer: true,
                    layoutMode: 'masonry',
                    transitionDuration: '0.8s'
                });
                $('.menu-filtering li').off('click').on('click', function () {
                    $('.menu-filtering li').removeClass('current_menu_item');
                    $(this).addClass('current_menu_item');
                    var selector = $(this).attr('data-filter');
                    $portfolio.isotope({ filter: selector });
                });
            }
        });
    }

    // Venubox
    if ($.fn.venobox) {
        $('.venobox:not(.vbox-item)').venobox({
            numeratio: true,
            infinigall: true
        });
    }

    // accordion js
    $(".accordion > li:eq(0) a:not(.active)").addClass("active").next().slideDown();
    $('.accordion a').off('click').on('click', function (j) {
        var dropDown = $(this).closest("li").find("p");
        $(this).closest(".accordion").find("p").not(dropDown).slideUp();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".accordion").find("a.active").removeClass("active");
            $(this).addClass("active");
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    // barfiller
    if ($.fn.barfiller) {
        $('#bar1:not(.barfiller-loaded)').addClass('barfiller-loaded').barfiller({ duration: 7000 });
        $('#bar2:not(.barfiller-loaded)').addClass('barfiller-loaded').barfiller({ duration: 7000 });
        $('#bar3:not(.barfiller-loaded)').addClass('barfiller-loaded').barfiller({ duration: 7000 });
        $('#bar4:not(.barfiller-loaded)').addClass('barfiller-loaded').barfiller({ duration: 7000 });
        $('#bar5:not(.barfiller-loaded)').addClass('barfiller-loaded').barfiller({ duration: 7000 });
    }

    // Custom Tab
    $('.tab ul.tabs:not(.active)').addClass('active').find('> li:eq(0)').addClass('current');
    $(".tab ul.tabs li a").off("click").on("click", function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    $(".circle_percent:not(.circle-loaded)").each(function () {
        $(this).addClass('circle-loaded');
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
            Counter: $dataV
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });
};