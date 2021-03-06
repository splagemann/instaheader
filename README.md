instaheader
====

Create an Instagram-style header with changing pictures. [Demo](http://splagemann.github.io/instaheader/).

How to Use
----------

[Download](https://github.com/splagemann/instaheader/archive/master.zip) or install with bower.

```
bower install --save instaheader
```

1. Add a container with some images. You can add new images as data-attributes or load them from web (see options).
    ```html
    <div id="container" data-images='["img/pic4.jpg", "img/pic5.jpg", "img/pic6.jpg"]'>
        <img src="img/pic1.jpg">
        <img src="img/pic2.jpg">
        <img src="img/pic3.jpg">
    </div>
    ```

2. Add the plugin after jQuery at the bottom of the body.

    ```html
    <script src="js/jquery.instaheader.js"></script>
    ```

3. Call the plugin.
    ```html
    <script>$('#container').instaheader();</script>
    ```

4. Options
    ```html
    <script>
        $('#container').instaheader({
            selector    : 'img',                         // jQuery selector to find images that should be replaced
            background  : false,                         // true, if you want to change background images
            reuseImages : false,                         // true, if you are using data-attribute and want to reuse images
            delay       : 3000,                          // delay (ms) before switching to next image
            imageUrl    : 'http://path/to/new/image/url' // or null if you use data-attribute
        });
   </script>
   ```

Support:
--------
* not really tested yet
* should work in all major browsers
