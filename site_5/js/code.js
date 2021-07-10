$(document).ready(function() {
	$('.header__nav__burger').click(function(event) {
		$('.header__nav__burger,.header__nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});