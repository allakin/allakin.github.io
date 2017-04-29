// скрываем прелоадер при загрузки страницы
$(window).on('load', () => {
  $('.preloader-overlay').velocity('fadeOut', {
    delay: 600,
    complete() {
      $('.welcome-screen').velocity('fadeOut', { delay: 500 });
    },
  });
});
