$(document).ready(function() {

	$('#downArrow').click(function() {
		$('html, body').animate({
			scrollTop: $("#projectWrapper").offset().top
		}, 750);
	});
});