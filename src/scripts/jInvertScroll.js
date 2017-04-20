$.jInvertScroll(['.scrollable'], {
	width: 'auto',	// Page width (auto or int value)
	height: 'auto',	// Page height (the shorter, the faster the scroll)
	onScroll: function(percent) {
		// Callback function that will be called each time the user
		// scrolls up or down, useful for animating other parts
		// on the page depending on how far the user has scrolled down
		// values go from 0.0 to 1.0 (with 4 decimals precision)
	}
});

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
  // width: blockWidth,
})

// console.log(blockEl.length);
