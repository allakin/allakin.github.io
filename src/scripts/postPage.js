//= include _variables.js
$(() => {
  //= include _info.js
  //= include _currentYear.js
  //= include _preloader.js
  //= include _menu.js

  // You can use any kind of selectors for jQuery Fluidbox
	$('a[data-fluidbox]').fluidbox();
});
