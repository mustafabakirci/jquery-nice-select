# Nice Select without jQuery

[Demo](https://mustafabakirci.github.io/js-nice-select/js-index.html)

## Changes
* You don't need JQuery anymore.
* Methods removed (for now).
* Keyboard actions removed.
* The data-display attribute is assigned to the original select element.(First example in the js-index.html)

## Usage

Include just the plugin.

```html
<link rel="stylesheet" href="path/to/nice-select.css">
<script src="path/to/nice-select.js"></script>
```

and initialize the plugin.

```javascript
niceSelectJS('select');
```


# jQuery Nice Select

A lightweight jQuery plugin that replaces native select elements with customizable dropdowns.

## Usage

Include jQuery and the plugin.

```html
<script src="path/to/jquery.js"></script> 
<script src="path/to/jquery.nice-select.js"></script>
```

Include the plugin styles, either the compiled CSS...

```html
<link rel="stylesheet" href="path/to/nice-select.css">
```

...or, ideally, import the SASS source (if you use SASS) in your main stylesheet for easier customization.

```scss
@import 'nice-select';
```

Finally, initialize the plugin.

```javascript
$(document).ready(function() {
  $('select').niceSelect();
});
```

Full documentation and examples at [hernansartorio.com/jquery-nice-select](http://hernansartorio.com/jquery-nice-select).