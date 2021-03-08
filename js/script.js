$(document).ready(function () {
  "use strict";

  // _________ Scrollable Header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
  // _________ Scrollable Header

  // _________ SlideToggleButton
  $(".side_button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $(this).parent(".burger_menu").toggleClass("open");
    $("header").toggleClass("header_slide");
    $(".navbar_subnavbar").slideToggle();
  });
  // _________ SlideToggleButton

  // _________ Search Clicked & Focused
  $(".form_search .form-control").focus(function () {
    $(this).addClass("focused");
  });
  $(".form_search .form-control").blur(function () {
    if (!$(this).val()) {
      $(this).removeClass("focused");
    } else {
      $(this).addClass("focused");
    }
  });
  if ($(window).innerWidth() > 767) {
    $("header .navbar_list_item.search .navbar_list_item_link").click(function (
      e
    ) {
      e.preventDefault();
      e.stopPropagation();
      $(this).siblings(".form_search").toggleClass("open");
      $(this).parent(".navbar_list_item.search").toggleClass("p_left");
    });
  } else {
    $("header .navbar_list_item.search .navbar_list_item_link").click(function (
      e
    ) {
      e.preventDefault();
      e.stopPropagation();
      $(".search_popup").fadeToggle(300).css("display", "flex");
    });
  }
  $(".search_popup_box .close").click(function (e) {
    e.preventDefault();
    $(".search_popup").fadeOut(300);
  });
  $(window).click(function () {
    $(".search_popup").fadeOut(300);
  });
  $(".search_popup_box_form").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
  // _________ Search Clicked & Focused

  // _________ Selectize Select Branches
  $("#selectBranches").selectize({
    sortField: "text",
  });
  // _________ Selectize Select Branches

  // _________ Discover Buy Banner
  $(".homePage .banner_discoverBuy_title").click(function (e) {
    $(".homePage .banner_discoverBuy_title").removeClass("active");
    $(this).addClass("active");
    $(".banner_discoverBuy_list").slideUp(300);
    $(this)
      .siblings(".banner_discoverBuy_list")
      .slideDown(300)
      .css("display", "flex");
  });
  $(".homePage .banner_discoverBuy").click(function (e) {
    e.stopPropagation();
  });
  $(window).click(function () {
    $(".homePage .banner_discoverBuy_title").removeClass("active");
    $(".banner_discoverBuy_list").slideUp(300);
  });
  // _________ Discover Buy Banner

  // _________ Products & Solutions Swiper
  var productsSwiper = new Swiper(
    "#productionContent .swiper-container.products_solutions_swiper",
    {
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      slideToClickedSlide: true,
    }
  );
  $(".products_solutions_swiper_slide_link").click(function (e) {
    e.preventDefault();
  });
  productsSwiper.on("slideChange", function () {
    $(".products_solutions_content").fadeOut(300).removeClass("active");
    $(".swiper-slide-active").addClass("act");
  });
  productsSwiper.on("slideChangeTransitionEnd", function () {
    $($(".swiper-slide-active").data("coffe")).fadeIn(300).addClass("active");
  });

  var solutionSwiper = new Swiper(
    "#solutionContent .swiper-container.products_solutions_swiper",
    {
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      slideToClickedSlide: true,
    }
  );
  $(".products_solutions_swiper_slide_link").click(function (e) {
    e.preventDefault();
  });
  solutionSwiper.on("slideChange", function () {
    $(".products_solutions_content").fadeOut(300).removeClass("active");
    $(".swiper-slide-active").addClass("act");
  });
  solutionSwiper.on("slideChangeTransitionEnd", function () {
    $($(".swiper-slide-active").data("coffe")).fadeIn(300).addClass("active");
  });

  $(".homePage .products_solutions_nav_list_item_link").click(function (e) {
    e.preventDefault();

    var productsSwiper = new Swiper(
      "#productionContent .swiper-container.products_solutions_swiper",
      {
        direction: "vertical",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
      }
    );
    $(".products_solutions_swiper_slide_link").click(function (e) {
      e.preventDefault();
    });
    productsSwiper.on("slideChange", function () {
      $(".products_solutions_content").fadeOut(300).removeClass("active");
      $(".swiper-slide-active").addClass("act");
    });
    productsSwiper.on("slideChangeTransitionEnd", function () {
      $($(".swiper-slide-active").data("coffe")).fadeIn(300).addClass("active");
    });

    var solutionSwiper = new Swiper(
      "#solutionContent .swiper-container.products_solutions_swiper",
      {
        direction: "vertical",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
      }
    );
    $(".products_solutions_swiper_slide_link").click(function (e) {
      e.preventDefault();
    });
    solutionSwiper.on("slideChange", function () {
      $(".products_solutions_content").fadeOut(300).removeClass("active");
      $(".swiper-slide-active").addClass("act");
    });
    solutionSwiper.on("slideChangeTransitionEnd", function () {
      $($(".swiper-slide-active").data("coffe")).fadeIn(300).addClass("active");
    });
    $(".navigation_content").slideUp().removeClass("active");
    $($(this).data("navigation")).slideDown().addClass("active");
  });
  // _________ Products & Solutions Swiper

<<<<<<< HEAD
  // _________ News Swiper
  var NewsSwiper = new Swiper(".swiper-container.latest_news_swiper", {
    autoHeight: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // _________ News Swiper

  // _________ Gallery Swiper Swiper
  var gallerySwiper = new Swiper(".swiper-container.gallery_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },
    },
  });

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryInfoSwiper = new Swiper(".gallery-top.gallery_info_swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  $(".gallery_focus_link").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".galleryPopup").fadeIn(300).css({display: 'flex', overflowY: 'scroll',});
    $('body').css({overflow: 'hidden'});

    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryInfoSwiper = new Swiper(".gallery-top.gallery_info_swiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  });
  $(".popup_box_close").click(function(e) {
    e.preventDefault();
    $(".galleryPopup").fadeOut(300);
    $('body').css({overflow: 'auto'});
  });
  $(window).click(function(e) {
    e.preventDefault();
    $(".galleryPopup").fadeOut(300);
    $('body').css({overflow: 'auto'});
  });
  $(".popup_box").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
  // _________ Gallery Swiper Swiper
=======
  // _________ Map Search
  $(".homePage .map_nav_list_item_link.map_search").click(function (e) {
    e.preventDefault();
    $(this).children("span").fadeToggle(1);
    $(this).siblings(".form_search").delay(3).toggleClass("open");
    $(this).parent(".map_nav_list_item").toggleClass("p_left");
  });
  // _________ Map Search
>>>>>>> 7593062aa1c1aa3607119acea4bf8c4927678073

  // _________ Testimonials Swiper
  var testimonialsSwiper = new Swiper(".swiper-container.testimonials_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
<<<<<<< HEAD
    autoplay: {
      delay: 5000,
    },
=======
>>>>>>> 7593062aa1c1aa3607119acea4bf8c4927678073
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // _________ Testimonials Swiper

  // start animation
  if ($(window).width() >= 991) {
    // Helper function for add element box list in WOW
    WOW.prototype.addBox = function (element) {
      this.boxes.push(element);
    };

    // Init WOW.js and get instance
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    // $('.wow').on('scrollSpy:exit', function () {
    //     $(this).css({
    //         'visibility': 'hidden',
    //         'animation-name': 'none'
    //     }).removeClass('animated');
    //     wow.addBox(this);
    // }).scrollSpy();
  }
  // end animation
});
// end jquery

// google maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.820553, lng: 30.802498 },
    zoom: 8,
  });
}
