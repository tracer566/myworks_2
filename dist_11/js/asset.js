$(document).ready(function() {
  $('#app').vide({
    mp4: '../video/video.mp4',
    webm: '../video/video.webm',
    ogv: '../video/video.ogv',
    poster: '../img/cover-image.jpg'
  })
});

$(document).ready(function() {
	var button = $('#button-primery');
	var modal = $('#modal');
	var close = $('#close');

	console.log(button);

	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function() {
		modal.removeClass('modal_active');
	});
});