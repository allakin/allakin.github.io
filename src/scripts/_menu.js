const overlayNav = $('.cd-overlay-nav');
const overlayContent = $('.cd-overlay-content');
const navigation = $('.cd-primary-nav');
const toggleNav = $('.header__menu-button');
const closeMenuBtn = $('.menu__close');

const closeMenuFunc = () => {
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
};
const openMenuFunc = () => {
  overlayNav.children('span').velocity({
    translateZ: 0,
    scaleX: 1,
    scaleY: 1,
  }, 500, 'easeInCubic', () => {
    navigation.addClass('fade-in');
  });
}
const layerInit = () => {
  const diameterValue =
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
};

layerInit();
$(window).on('resize', () => {
  window.requestAnimationFrame(layerInit);
});

closeMenuBtn.on('click', closeMenuFunc);

$(document).keyup((e) => {
  // escape key maps to keycode `27`
  if (e.keyCode == 27) closeMenuFunc();
});

toggleNav.on('click', openMenuFunc);

let currentMenuItem = '';

$('.menu__list-item').each((i, e) => {
  if($(e).hasClass('active')) {
    currentMenuItem = $(e).find('a').data('id');
  }
})

$(`#menu-icon-${currentMenuItem}`)
  .velocity({ opacity: 1 }, { display: 'block' }, 500);

$('.menu__list-link').hover((event) => {
  let hoverId = $(event.target).data('id');

  if(currentMenuItem == hoverId) return false;

  $(`#menu-icon-${currentMenuItem}`)
    .velocity('stop')
    .velocity({ opacity: 0 }, { display: 'none' }, 500)

  $(`#menu-icon-${hoverId}`)
    .velocity('stop')
    .velocity({ opacity: 1 }, { display: 'block' }, 500)
}, (event) => {
  let hoverId = $(event.target).data('id');

  if(currentMenuItem == hoverId) return false;

  $(`#menu-icon-${hoverId}`)
    .velocity('stop')
    .velocity({ opacity: 0 }, { display: 'none' }, 500)

  $(`#menu-icon-${currentMenuItem}`)
    .velocity('stop')
    .velocity({ opacity: 1 }, { display: 'block' }, 500)
});
