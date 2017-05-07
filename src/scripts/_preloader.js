// скрываем прелоадер при загрузки страницы
const welcomeScreen = $('.welcome-screen');
const welcomeScreenText = $('.welcome-screen__text');
const welcomeScreenTCube = $('.welcome-screen__cube');
const welcomeScreenTextWidth = welcomeScreenText.outerWidth();
const fadeinBlock = $('.welcome-screen__text-wrap_fade--in');
const scrollableBlock = $('.scrollable__block');

$(window).on('load', () => {
  $('.preloader-overlay').velocity('fadeOut', {
    delay: 600,
    complete() {
      welcomeScreenTCube
        .addClass('show');

      fadeinBlock
        .delay(1500)
        .css({ width: welcomeScreenTextWidth })
        .addClass('show');

      welcomeScreenText
        .delay(2000)
        .addClass('active');

      welcomeScreen
        .velocity('fadeOut', {
          delay: 3000,

          complete() {
            scrollableBlock
              .addClass('fadeInLeft')
              .delay(1000)
              .css({
                opacity: '',
                transform: '',
              })
          }
        });
    },
  });
});
