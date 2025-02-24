function HOMEINIT($) {
  "use strict";

  var windown = $(window);
  
  // Offcanvas Js
  $(".tp-offcanvas-open-btn").on("click", function () {
    $(".offcanvas__area").addClass("offcanvas-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".offcanvas-close-btn").on("click", function () {
    $(".offcanvas__area").removeClass("offcanvas-opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("offcanvas-opened");
    $(".tp-search-area").removeClass("opened");
    $(".cartmini__area").removeClass("cartmini-opened");
    $(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  var tp_rtl = localStorage.getItem("tp_dir");
  let rtl_setting = tp_rtl == "rtl" ? true : false;

  var slider = new Swiper(".cards-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    pagination: {
      el: ".tp-arrival-slider-dot",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          "<button>" +
          (index + 1) +
          "</button>" +
          "</span>"
        );
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}
