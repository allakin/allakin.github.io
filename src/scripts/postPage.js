//= include _variables.js
$(() => {
  //= include _info.js
  //= include _currentYear.js
  //= include _preloader.js
  //= include _menu.js

  // You can use any kind of selectors for jQuery Fluidbox
  $('a[data-fluidbox]').fluidbox();

  $(window).scroll(() => {
    $('a[data-fluidbox]').fluidbox('close');
  });

  $('.viewport-checker').viewportChecker();
  $('.post__title,  .post__time, .post__back-link')
    .addClass('active');
  $('.post__back-link svg').show();

  setTimeout(() => {
    $('.post__back-link').css({ opacity: 1 });
  }, 300)

  setTimeout(() => {
    $('.post__cover-image').addClass('fade');
  }, 900)
});
