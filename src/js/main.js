$(document).ready(function () {
  landingScroll();
  backgroundSizing();
  slider();
  clientsSlider();
});

//якорные ссылки
function landingScroll() {
  var body = $("body"),
      navLink = $(".nav__link");

  function scroll() {
    if (body.hasClass("in-scroll")) {} else {
      navLink.each(function () {
        var window_top = $(window).scrollTop(),
            div_1 = $(this).attr('href'),
            div_top = $(div_1).offset().top,
            blockHeight = $(div_1).height(),
            padding;
        if (innerWidth > 576) {
          padding = 160;
        } else {
          padding = 80;
        }
        if (window_top > div_top && window_top - padding < div_top + blockHeight) {
          $('.nav__item').find('a').removeClass('nav__link_active');
          $('.nav__item').find('a[href="' + div_1 + '"]').addClass('nav__link_active');
        } else {
          $('.nav__item').find('a[href="' + div_1 + '"]').removeClass('nav__link_active');
        };
      });
    }
  }

  $(window).scroll(function () {
    scroll();
  });

  navLink.click(function (event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    event.preventDefault();
    navLink.removeClass('nav__link_active');
    $(this).addClass('nav__link_active');

    if (innerWidth > 768) {
      $('body,html').animate({
        scrollTop: top
      }, 400);
      body.addClass("in-scroll");
      setTimeout(function () {
        body.removeClass("in-scroll");
      }, 400)
    } else {
      setTimeout(function () {
        $('body,html').animate({
          scrollTop: top
        }, 400);
      }, 300)
    }
  })
  $('.home__button').click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 400);
    body.addClass("in-scroll");
    setTimeout(function () {
      body.removeClass("in-scroll");
    }, 400)
  });
}
function slider() {
  var slider = $('.gallery-slider'),
      sliderNav = $('.gallery-nav__list');
  
  $().fancybox({
    selector : '.gallery-slider__slide:not(.slick-cloned) .gallery-slider__container',
    backFocus : false
  });

  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    asNavFor: '.gallery-nav__list',
    draggable: false,
    speed: 300,
    swipe: false,
    infinite: true,
    nextArrow: '.gallery-controls__next',
    prevArrow: '.gallery-controls__prev',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  
  sliderNav.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.gallery-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    draggable: false,
    speed: 0,
    swipe: false,
    variableWidth: true,
  });
}
function clientsSlider() {
  var slider = $('.clients-slider');

  slider.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    draggable: false,
    speed: 300,
    swipe: false,
    infinite: true,
    nextArrow: '.clients__next',
    prevArrow: '.clients__prev',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });  
}

$(document).on('click', '.slick-cloned', function(e) {
  var $slides = $(this)
    .parent()
    .children('.slick-slide:not(.slick-cloned)').find('.gallery-slider__container');

  $slides
    .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
    .trigger("click.fb-start", { $trigger: $(this) });

  return false;
});