$(document).ready(function () {
  header();
  nav();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
  backgroundSizing();
});
var innerWidth = $('body').innerWidth(),
    overlay = $('.overlay');

function nav() {
  var navButton = $('.mobile-button, .overlay'),
    nav = $('.nav'),
    navLink = $('.nav__link');

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
  
  navLink.on('click', function () {
    if(innerWidth < 769) {
      nav.removeClass('nav_active');
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
function header() {
  function state() {
    if ($(window).scrollTop() > 1){
      $('.header').addClass("header_active");
    }
    else{
      $('.header').removeClass("header_active");
    }
  }
  state();
  $(window).scroll(function() {
    state();
  });
}
