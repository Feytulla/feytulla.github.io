document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;

let video = document.querySelector('#video-player');
let display;

function play() {
	video.play();
}
function pause() {
	video.pause();
}

$(document).ready(function(){
	$('.play').click(function(event){
		$('.play').toggle().css('display', 'none');
		$('.pause').toggle().css('display', 'blok');
	});
	$('.pause').click(function(event){
		$('.pause').toggle().css('display', 'none');
		$('.play').toggle().css('display', 'blok');
	});
});