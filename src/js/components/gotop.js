const HTMLBODY = $('html, body');

$('.js-go-top').on('click', e => {
  e.preventDefault();
  HTMLBODY.animate({
    scrollTop: 0
  }, 600);
});
