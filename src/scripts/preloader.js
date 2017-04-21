// скрываем прелоадер при загрузки страницы
$(window).on('load', function () {
  $('.preloader-overlay')
    .delay(450)
    .fadeOut('slow');
});
