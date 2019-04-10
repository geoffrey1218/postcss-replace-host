var postcss = require('postcss')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
  })
}

it('replaces :host with the given class', function () {
  return run(':host{ }', '.test-class{ }', { class: 'test-class' })
})

it('replaces :host and removes parentheses', function () {
  return run(
    ':host(:not(.is-touching)){ }',
    '.test-class:not(.is-touching){ }',
    { class: 'test-class' })
})

it('throws error when class not provided', function () {
  return expect(function () { run('', '', { }) }).toThrow()
})
