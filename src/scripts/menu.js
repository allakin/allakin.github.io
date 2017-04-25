const overlayNav = $('.cd-overlay-nav');
const overlayContent = $('.cd-overlay-content');
const navigation = $('.cd-primary-nav');
const toggleNav = $('.header__menu-button');
const closeMenuBtn = $('.menu__close');

layerInit();
$(window).on('resize', () => {
  window.requestAnimationFrame(layerInit);
});

closeMenuBtn.on('click', () => {
  overlayContent.children('span').velocity({
    translateZ: 0,
    scaleX: 1,
    scaleY: 1,
  }, 500, 'easeInCubic', () => {
    navigation.removeClass('fade-in');

    overlayNav.children('span').velocity(
      {
        translateZ: 0,
        scaleX: 0,
        scaleY: 0,
      },
      0,
    );

    overlayContent
      .addClass('is-hidden')
      .one(
        'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        () => {
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
          }, 0, () => {
            overlayContent.removeClass('is-hidden');
          });
        },
      );
    if ($('html').hasClass('no-csstransitions')) {
      overlayContent.children('span').velocity({
        translateZ: 0,
        scaleX: 0,
        scaleY: 0,
      }, 0, () => {
        overlayContent.removeClass('is-hidden');
      });
    }
  });
});

toggleNav.on('click', () => {
  overlayNav.children('span').velocity({
    translateZ: 0,
    scaleX: 1,
    scaleY: 1,
  }, 500, 'easeInCubic', () => {
    navigation.addClass('fade-in');
  });
});

function layerInit() {
  var diameterValue =
    Math.sqrt(
      Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2),
    ) * 2;
  overlayNav
    .children('span')
    .velocity(
      {
        scaleX: 0,
        scaleY: 0,
        translateZ: 0,
      },
      50,
    )
    .velocity(
      {
        height: diameterValue + 'px',
        width: diameterValue + 'px',
        top: -(diameterValue / 2) + 'px',
        left: -(diameterValue / 2) + 'px',
      },
      0,
    );

  overlayContent
    .children('span')
    .velocity(
      {
        scaleX: 0,
        scaleY: 0,
        translateZ: 0,
      },
      50,
    )
    .velocity(
      {
        height: diameterValue + 'px',
        width: diameterValue + 'px',
        top: -(diameterValue / 2) + 'px',
        left: -(diameterValue / 2) + 'px',
      },
      0,
    );
}

$('.menu__list-link').hover((event) => {
  let color = $(event.target).data('color');
  if (!color) color = '#000';
  $('#menu-icon').velocity("stop").velocity({ fill: color }, 500);
});
