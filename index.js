var postcss = require('postcss')

module.exports = postcss.plugin('postcss-replace-host', function (opts) {
  opts = opts || {}
  if (!opts['class']) {
    throw new Error('Class is required.')
  }
  var classSelector = '.' + opts.class

  return function (root) {
    root.walkRules(function (rule) {
      if (rule.selector.indexOf(':host(') !== -1) {
        rule.selector = rule.selector.replace(
          /(:host)\(([\s\S]*)\)/,
          classSelector.concat('$2'))
      } else if (rule.selector.indexOf(':host') !== -1) {
        rule.selector = rule.selector.replace(':host', classSelector)
      }
    })
  }
})
