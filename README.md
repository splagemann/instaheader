instaheader
====

Create an Instagram-style header with changing pictures. [Demo](http://splagemann.github.io/instaheader/).

How to Use
----------

[Download](https://github.com/splagemann/instaheader/archive/master.zip) or install with bower.

```
bower install instaheader
```


1. Add a container and some images.

    ```html
    <div id="container">
		<img src="img/pic1.jpg">
		<img src="img/pic2.jpg">
		<img src="img/pic3.jpg">
		<img src="img/pic4.jpg">
		<img src="img/pic5.jpg">
		<img src="img/pic6.jpg">
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

Support:
--------
* not really tested yet
* should work in all major browsers
