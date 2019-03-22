$(document).ready(function () {
  nav();
  backgroundSizing();
  slider();
  clientsSlider();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
  backgroundSizing();
});
var innerWidth = $('body').innerWidth(),
    overlay = $('.overlay');

function nav() {
  var navButton = $('.mobile-button, .overlay'),
    nav = $('.nav');

  navButton.click(function (event) {
    event.preventDefault();
    nav.toggleClass('nav_active');
    navState();
  })
  function navState() {
    if (nav.hasClass('nav_active')) {
      navButton.addClass('mobile-button_active');
      overlay.fadeIn(300);
      scrollLock.hide($("body"));
      $('body').addClass('body_fixed');
    } else {
      navButton.removeClass('mobile-button_active');
      overlay.fadeOut(300);
      scrollLock.show($("body"));
      $('body').removeClass('body_fixed');
    }
  }
  $(window).resize(function () {
    if (innerWidth > 768) {
      nav.removeClass('nav_active');
      navState();
    }
  });


  overlay.on('click', function () {
    if (nav.hasClass('mobile-nav_active')) {
      nav.removeClass('mobile-nav_active');
      navState();
    }
  })
}
function backgroundSizing() {
  var bgGallery = $('.gallery__background'),
      bgGalleryWidth = $('.gallery__section_controls').width() + 30,
      containerGalleryWidth = $('.gallery__container').width();
  var bgContacts = $('.contacts__background'),
      bgContactsWidth = $('.contacts__section_content').width() + 30,
      containerContactsWidth = $('.contacts__container').width();

  bgGallery.width(bgGalleryWidth + ((innerWidth - containerGalleryWidth) / 2));
  bgContacts.width(bgContactsWidth + ((innerWidth - containerContactsWidth) / 2));
}
function slider() {
  var slider = $('.gallery-slider'),
      sliderNav = $('.gallery-nav__list');
  
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
