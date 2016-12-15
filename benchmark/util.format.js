var util = require('util')

var longString1 = 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle%sgooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
var longString2 = 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle$$$googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
var longString3 = function (_replacer) {
  return 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle' + _replacer + 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
}

var replacer = 'tablename';

suite('util.format', function () {
  bench('util.format', function () {
    util.format(longString1, replacer)
  })

  bench('str.replace', function () {
    longString2.replace('$$$', replacer)
  })

  bench('custom fn', function () {
    longString3(replacer)
  })
})
