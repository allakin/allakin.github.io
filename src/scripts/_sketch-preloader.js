// скрываем прелоадер при загрузки страницы
// const welcomeScreen = $('.welcome-screen');
// const welcomeScreenText = $('.welcome-screen__text');
// const welcomeScreenTCube = $('.welcome-screen__cube');
// const welcomeScreenTextWidth = welcomeScreenText.outerWidth();
// const fadeinBlock = $('.welcome-screen__text-wrap_fade--in');
const scrollableBlock = $('.scrollable__block');

$(window).on('load', () => {
  $('.preloader-overlay').velocity('fadeOut', {
    delay: 600,
    complete() {
      scrollableBlock
        .addClass('fadeInLeft')
        .delay(1000)
        .css({
          opacity: '',
          transform: '',
        });
    },
  });
});
