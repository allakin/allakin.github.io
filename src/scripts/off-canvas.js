$(() => {
  let clearMobileClasses = function() {
    $('.off-canvas-wrapper-inner')
      .removeClass('is-off-canvas-open')
      .removeClass('is-open-right')
      .removeClass('is-open-left');

    $('.off-canvas.position-left')
      .removeClass('is-open');

    $('.off-canvas.position-right')
      .removeClass('is-open');
  };

  $('.open-menu__button').on(istouch, function() {
    clearMobileClasses();

    const targetAction = $(this).data('show');
    const offCanvasWrapperInner = $('.off-canvas-wrapper-inner');

    if (targetAction === 'left-menu') {
      offCanvasWrapperInner
        .addClass('is-off-canvas-open')
        .addClass('is-open-left');

      $('.off-canvas.position-left')
          .addClass('is-open');
    } else {
      offCanvasWrapperInner
        .addClass('is-off-canvas-open')
        .addClass('is-open-right');

      $('.off-canvas.position-right')
        .addClass('is-open');
    }
  });

  $('.js-off-canvas-exit').on(istouch, function() {
    clearMobileClasses();
  });

  $(window).resize(() => {
    if ($(window).width() > 768) {
      clearMobileClasses();
    }
  });
});
