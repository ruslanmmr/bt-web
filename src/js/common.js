$(document).ready(function () {
  nav();
  backgroundSizing();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
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
      bgWidth = $('.gallery__section_controls').width() + 30,
      containerWidth = $('.gallery__container').width();
  console.log(bgWidth, innerWidth, (containerWidth / 2))
  bgGallery.width(bgWidth + ((innerWidth - containerWidth) / 2));
}
