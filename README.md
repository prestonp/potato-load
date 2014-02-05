Potato Load
------------

> Lazy load images without jquery or fancy effects

__Install__

```
bower install potato-load
```

Then include *potato-script.js*

```
<script src="/dist/app.js"></script>
```

__Usage__

In your HTML, label images you want to lazy load like this:

```
<img class="lazy-load" data-src="http://placekitten.com/200/300">
```

Then use the plugin `potatoload('.lazy-load');` in your javascript.
