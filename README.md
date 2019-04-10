# PostCSS Replace Host [![Build Status][ci-img]][ci]

[PostCSS] plugin to replace references to :host with a specified class name. This allows CSS intended for webcomponents to be extracted and used outside the shadow DOM.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/geoffrey1218/postcss-replace-host.svg
[ci]:      https://travis-ci.org/geoffrey1218/postcss-replace-host

```css
/* Input example */
:host {
  display: flex;
}
```

```css
/* Output example */
.your-class-here {
  display: flex;
}
```

References to `:host()` are also replaced.

```css
/* Input example */
:host(.test-class) {
  display: flex;
}
```

```css
/* Output example */
.your-class-here.test-class {
  display: flex;
}
```


## Usage

```js
postcss([ require('postcss-replace-host')({class: 'your-class-here'}) ])
```

See [PostCSS] docs for examples for your environment.
