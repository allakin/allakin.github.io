// скрываем прелоадер при загрузки страницы
$(window).on('load', () => {
  $('.preloader-overlay')
    .delay(450)
    .fadeOut('slow');
});
