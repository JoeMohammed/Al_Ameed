$(document).ready(function () {
  "use strict";

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
