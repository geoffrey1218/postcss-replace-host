# PostCSS Replace Host [![Build Status][ci-img]][ci]

[PostCSS] plugin to replace references to :host with a specified class name..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/geoffrey1218/postcss-replace-host.svg
[ci]:      https://travis-ci.org/geoffrey1218/postcss-replace-host

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-replace-host') ])
```

See [PostCSS] docs for examples for your environment.
