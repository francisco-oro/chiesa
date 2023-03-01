$(document).ready(function () {
    // nav menu
    $(window).on('load resize', function () {
        var $thisnav = $('.menu__item--current').offset().left;

        $('.menu__item').hover(function () {
            var $left = $(this).offset().left - $thisnav;
            var $width = $(this).outerWidth();
            var $start = 0;
            $('.menu__slider').css({ 'left': $left, 'width': $width });
        }, function () {
            var $initwidth = $('.menu__item--current').width();
            $('.menu__slider').css({ 'left': '0', 'width': $initwidth });
        });
    });

    /* Sticky Navigation 
    $(".js--about-section").waypoint(function (direction) {
        if (direction == 'down') {
            $(".menu").addClass("menu-sticky");
        }
        else {
            $('.menu').removeClass('menu-sticky');
        }
    });
    */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

