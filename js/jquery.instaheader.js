(function ( $ ) {

    $.fn.instaheader = function(options) {

        var settings = $.extend({
            selector     : 'img',                   // jQuery selector to find images that should be replaced
            imageUrl     : null,                    // @todo get new images from url
            reuseImages  : true,                    // reuse already displayed images
            delay        : 2000                     // timedelay (ms) for switching next image
        }, options);

        var images           = this.find(settings.selector);
        var cntImages        = images.length;
        var imagesHidden     = new Array();
        if (settings.imageUrl === null) {
            imagesHidden = this.data('images');
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
                    imagesHidden.push($(images[replaceImageNumber]).attr('src'));
                }
            
                $(images[replaceImageNumber]).fadeOut('fast', function() {
                    $(this).attr('src', imagesHidden.shift());
                }).fadeIn('fast');
            
            } else {
                clearInterval(replaceImage);
            }
        }

        setInterval(replaceImage, settings.delay);

        return this;
    };

}(jQuery));