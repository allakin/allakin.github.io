const scrollableBlock = $('.scrollable__block');

//= include _variables.js
$(() => {
  //= include _info.js
  //= include _currentYear.js
  //= include _preloader.js
  //= include _jInvertScroll.js
  //= include _menu.js
  //= include _touch.js

  scrollableBlock.on('click', function() {
    scrollableBlock
      .removeClass('fadeInLeft')
      .addClass('fadeOutRight');

    setTimeout(() => {
      window.location.assign($(this).data('link'))
    }, 700)
  })
});
