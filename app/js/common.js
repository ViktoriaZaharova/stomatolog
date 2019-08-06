$(function () {

  // выпадающее меню
  var res = $(".drop_menu");
  $(".services").on("click", funk);

  $(document).click(function (e) {
    if ($(e.target).closest(res).length || $(e.target).closest('.services').length) return;
    res.fadeOut(100);
    e.stopPropagation();
  });

  function funk() {
    if (res.css("display") == "none") {
      res.fadeIn(100);
    }
    else {
      res.fadeOut(100);
    }
  }

  // активная ссылка меню
  $('.mnu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('current');
    }
  });

  // активная ссылка страниц
  $('.block_links li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('active_links');
    }
  });

  // активная ссылка фильтра
  $('.filter_item').click(function () {
    $('.filter_item').removeClass('active_filter');
    $(this).addClass('active_filter');
  });

  $(".phone").mask("+7 (999) 999-99-99");

  $('.home_carousel').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 2000,
    center: true,
    nav: true,
    navText: ['<img src="img/arrow-left.png">', '<img src="img/arrow-right.png">'],
    autoplay: true,
    autoplayTimeout: 5000
  });

  $('.about_carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ['<img src="img/arrow-left.png">', '<img src="img/arrow-right.png">'],
    autoplay: true,
    autoplayTimeout: 5000
  });

  $('.specialists_carousel').owlCarousel({
    // loop: true,
    smartSpeed: 1500,
    items: 4,
    nav: true,
    navText: ['<img src="img/ar-left.png">', '<img src="img/ar-right.png">'],
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      1090: {
        items: 3
      },
      1390: {
        items: 4
      }
    }
  });

// карта
  ymaps.ready(function () {
    var map = new ymaps.Map("map", {
      center: [51.713980057174844, 39.171503271163935],
      zoom: 18
    });

    var place = new ymaps.Placemark(
      [51.714566542678305, 39.17111703306578], {
        hintContent: false
      },
      {
        iconImageHref: 'img/marker.png',
        iconImageSize: [175, 219],
        iconLayout: 'default#image'
      }
    );
    map.geoObjects.add(place);
  });

  // кнопка наверх
  $("body").on("click", ".top", function () {
    $("html, body").animate({scrollTop: 0}, "slow")
  });

// фильтр
  $('.filter_item').click(function () {
    var category = $(this).attr('id');

    if (category == 'all') {
      $('.animal_item').addClass('hide');
      setTimeout(function () {
        $('.animal_item').removeClass('hide');
      }, 500);
    } else {
      $('.animal_item').addClass('hide');
      setTimeout(function () {
        $('.' + category).removeClass('hide');
      }, 500);
    }
  });

  // плавный скролл
  $(".go_to").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
    return false;
  });


  $(function () {
    var pull = $('#mobile_mnu');
    menu = $('.menu');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });

  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

});

// модальные окна
$(document).ready(function () {
  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');

  open_modal.click(function (event) {
    event.preventDefault();
    var div = $(this).attr('href');
    overlay.fadeIn(400,
      function () {
        $(div)
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  close.click(function () {
    modal
      .animate({opacity: 0, top: '45%'}, 200,
        function () {
          $(this).css('display', 'none');
          overlay.fadeOut(400);
        }
      );
  });
});

