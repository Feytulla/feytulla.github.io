$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.nav__panel').toggleClass('active');
		$('body').toggleClass('lock');
	});
});