$('.js-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-slider-nav'
});
$('.js-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  verticalSwiping : true,
  vertical: true,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.js-slider-for'
});
