//= include _variables.js
$(() => {
  //= include _info.js
  //= include _currentYear.js
  //= include _preloader.js
  //= include _menu.js

  // You can use any kind of selectors for jQuery Fluidbox
	// $('a[data-fluidbox]').fluidbox();
  //
  // $(window).scroll(function() {
  // 	$('a[data-fluidbox]').fluidbox('close');
  // });
  //
  // $('.viewport-checker').viewportChecker();

  $('.about__typed-text').typed({
    strings: ["WEB DESIGNER.", "WEB DEVELOPER.", "DOG LOVER.", "COFFEE DRINKER."],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 2000,
    showCursor: true,
    loop: true,
  });
});
