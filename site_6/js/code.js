$(document).ready(function() {
	$('.header__burger').click(function(event) {
	$('.header__burger').toggleClass('active');
	});
});
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		pauseOnHover:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});