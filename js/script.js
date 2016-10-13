$(document).ready(function() {

    // Change Navigation Background on Scroll
    var scroll_start = 0;
    var nav = $('#nav');
    var offset = nav.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('#nav').css('background-color', '#02182b')
            $('#nav').css('opacity', '0.9');
        } else {
            $('#nav').css('background-color', 'transparent');
        }
    });

    // Add Active State on Location Clicked - Navigation
    var sections = $('section'),
        nav_height = nav.outerHeight();
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr(
                    'id') + '"]').addClass('active');
            }
        });
    });

    // Paralax Scrolling for Header
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.header').css('top', +(scrolled * 0.5) + 'px');
    }
    $(window).scroll(function(e) {
        parallax();
    });


    // Hover Effect for Portfolio Grid
    $('.grid-box').mouseenter(function(){
      $('img', this).addClass('image-hover');
      $('.caption-box', this).addClass('caption-hover');
    });
    $('.grid-box').mouseleave(function(){
      $('img', this).removeClass('image-hover');
      $('.caption-box', this).removeClass('caption-hover');
    });

// Categorize Portfolio 
  // Digital
    $('.digital-button').on('click', function() {

      // Check if other buttons are selected
        if ($('.art-button, .dev-button').hasClass('category-active')) {
            $('.art-button, .dev-button').removeClass('category-active');
            $('.art, .dev').hide();

          // Grab the category
            $('.digital').slideToggle();
            $(this).toggleClass('category-active');
        } else if 
            ($('.all-button').hasClass('category-active')) {
            $('.all-button').removeClass('category-active');
            $('.art, .dev').slideToggle();
            $(this).toggleClass('category-active');
        } else {
          // Grab the category
            $(this).toggleClass('category-active');
            $('.art, .dev').slideToggle();
        };
    });

  // Art/Print
    $('.art-button').on('click', function() {

      // Check if other buttons are selected
        if ($('.digital-button, .dev-button').hasClass('category-active')) {
            $('.digital-button, .dev-button').removeClass('category-active');
            $('.digital, .dev').hide();

          // Grab the category
            $('.art').slideToggle();
            $(this).toggleClass('category-active');
        } else if 
            ($('.all-button').hasClass('category-active')) {
            $('.all-button').removeClass('category-active');
            $('.digital, .dev').slideToggle();
            $(this).toggleClass('category-active');
        } else {
          // Grab the category
            $(this).toggleClass('category-active');
            $('.digital, .dev').slideToggle();
        };
    });

  // Development
    $('.dev-button').on('click', function() {

      // Check if other buttons are selected
        if ($('.digital-button, .art-button').hasClass('category-active')) {
            $('.digital-button, .art-button').removeClass('category-active');
            $('.digital, .art').hide();

          // Grab the category
            $('.dev').slideToggle();
            $(this).toggleClass('category-active');
        } else if 
            ($('.all-button').hasClass('category-active')) {
            $('.all-button').removeClass('category-active');
            $('.digital, .art').slideToggle();
            $(this).toggleClass('category-active');
        } else {

          // Grab the category
            $(this).toggleClass('category-active');
            $('.digital, .art').slideToggle();
        };
    });

    // All
    $('.all-button').on('click', function() {
        $('.digital-button, .art-button, .dev-button').removeClass('category-active');
        $('.digital, .art, .dev').show('slow');
        $(this).toggleClass('category-active');
    });

})

