$(document).ready(function () {
  landingScroll();
});

//якорные ссылки
function landingScroll() {
  var headerHeight,
      body = $("body"),
      navLink = $(".nav__link");

  function scroll() {
    if (body.hasClass("in-scroll")) {} else {
      navLink.each(function () {
        var window_top = $(window).scrollTop(),
            div_1 = $(this).attr('href'),
            div_top = $(div_1).offset().top,
            blockHeight = $(div_1).height(),
            padding;
        headerHeight = $(".header").height() + 2;
        if (innerWidth > 576) {
          padding = 160;
        } else {
          padding = 80;
        }
        if (window_top > (div_top - headerHeight) && window_top - padding < (div_top - headerHeight) + blockHeight) {
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
      headerHeight = $(".header").height() + 1,
      top = $(id).offset().top - headerHeight;
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
        headerHeight = $(".header").height(),
        top = $(id).offset().top - headerHeight;
    $('body,html').animate({
      scrollTop: top
    }, 400);
    body.addClass("in-scroll");
    setTimeout(function () {
      body.removeClass("in-scroll");
    }, 400)
  });
}