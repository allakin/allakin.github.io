$.jInvertScroll(['.scrollable']);

const blockWidth = 423;
const blockHeight = 220;
const wrapPaddingLeft = 160;
const wrapPaddingRight = 160;
const targetEl = $('.scrollable');
const blockEl = $('.scrollable__block');
const wrapEl = $('.scrollable__wrap');

targetEl.css({
  width: (blockEl.length * blockWidth) + wrapPaddingLeft + wrapPaddingRight
})

wrapEl.each((i, e) => {
  $(e).css({
    left: (i * blockWidth) + wrapPaddingLeft
  })
})

blockEl.css({
  height: blockHeight,
  width: blockWidth,
})

wrapEl.css({
  height: (blockHeight * 2) + 20,
})
