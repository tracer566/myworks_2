$(document).ready(function() {
  $('#app').vide({
    mp4: '../dist_11/video/video.mp4',
    webm: '../dist_11/video/video.webm',
    ogv: '../dist_11/video/video.ogv',
    poster: '../dist_11/img/cover-image.jpg'
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
