const jqueryEl = $('#scrollable');
const elemWidth = jqueryEl.width();
let widthWithOutWindowsWidth = elemWidth - $(window).width();

$(window).on('resize', () => {
  widthWithOutWindowsWidth = elemWidth - $(window).width();
});

let margin = 0;
new Hammer(jqueryEl[0], { domEvents: true });

jqueryEl.on('panstart', () => {
  margin = parseInt(jqueryEl.css('left'), 10);
});

jqueryEl.on('pan', (e) => {
  const delta = margin + e.originalEvent.gesture.deltaX;
  if (delta >= -widthWithOutWindowsWidth && delta <= 0) {
    jqueryEl.css({
      left: margin + e.originalEvent.gesture.deltaX,
    });
  }
});
