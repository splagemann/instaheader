(function ( $ ) {

    $.fn.instaheader = function(options) {

        return this.each(function(index, element) {

            element = $(element);

            var settings = $.extend({
                selector     : 'img',                   // jQuery selector to find images that should be replaced
                imageUrl     : null,                    // load images from this url
                reuseImages  : true,                    // reuse already displayed images
                delay        : 2000,                    // timedelay (ms) for switching next image
                background   : false                    // replace background image        
            }, options);

            var images           = element.find(settings.selector);
            var cntImages        = images.length;
            var imagesHidden     = new Array();
            if (settings.imageUrl === null) {
                imagesHidden = element.data('images');
            }

            var replaceImage = function() {
                
                if (settings.imageUrl !== null) {
                    $.get(settings.imageUrl, function(response) {
                        imagesHidden = new Array(response);
                    });
                }

                if (imagesHidden.length > 0) {
                    replaceImageNumber = Math.floor(Math.random()*cntImages);
                    
                    if (settings.reuseImages) {
                        if (settings.background) {
                            var bg = $(images[replaceImageNumber]).css('background-image');
                            bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
                            if (bg) {
                                imagesHidden.push(bg[2]);
                            }
                        } else {
                            imagesHidden.push($(images[replaceImageNumber]).attr('src'));
                        }
                    }
                
                    $(images[replaceImageNumber]).fadeOut('fast', function() {
                        if (settings.background) {
                            $(this).css('background-image', 'url(' + imagesHidden.shift() + ')');
                        } else {
                            $(this).attr('src', imagesHidden.shift());
                        }
                    }).fadeIn('fast');
                
                } else {
                    clearInterval(replaceImage);
                }
            }

            setInterval(replaceImage, settings.delay);
        });
    };

}(jQuery));