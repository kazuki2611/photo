$(function () {
  $('.is-hamburger').click(function () {
    $('.p-global__menu').slideToggle();
  });
});
var timer = 0;
var currentWidth = window.innerWidth;
$(window).resize(function () {
    if (currentWidth == window.innerWidth) {
        return;
    }
    if (timer > 0) {
        clearTimeout(timer);
    }

    timer = setTimeout(function () {
        location.reload();
    }, 200);

});