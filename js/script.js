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
  $("header .navbar_list_item.search .navbar_list_item_link").click(function (
    e
  ) {
    e.preventDefault();
    $(this).siblings(".form_search").toggleClass("open");
    $(this).parent(".navbar_list_item.search").toggleClass("p_left");
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
  var productsSolutionsSwiper = new Swiper(".swiper-container.products_solutions_swiper", {
    direction: "vertical",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    slideToClickedSlide: true,
  });
  $('.products_solutions_swiper_slide_link').click(function (e) {
    e.preventDefault();
  });
  productsSolutionsSwiper.on('slideChange', function () {
    $('.products_solutions_content').fadeOut(300).removeClass('active');
    $('.swiper-slide-active').addClass('act');
  });
  productsSolutionsSwiper.on('slideChangeTransitionEnd', function () {
    $($('.swiper-slide-active').data('coffe')).fadeIn(300).addClass('active');
  });
  // _________ Products & Solutions Swiper

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
