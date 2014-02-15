$.fn.instaheader = function() {
	
	var cntVisibleImages = 3;
	var images           = this.find('img');
	var cntImages        = images.length;
	var imagesHidden     = [];

	images.each(function(index, obj) {
		if (index >= cntVisibleImages) {
			imagesHidden.push($(obj).attr('src'));
			$(obj).remove();	
		}
	});

	setInterval(function() {
		replaceImageNumber = Math.floor(Math.random()*cntVisibleImages);
		
		imagesHidden.push($(images[replaceImageNumber]).attr('src'));
		$(images[replaceImageNumber]).fadeOut('fast', function() {
			$(this).attr('src', imagesHidden.shift());
		}).fadeIn('fast');

	}, 2000);
	return this;
}