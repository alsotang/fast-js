var _ = require('lodash');

var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

suite('iterate_object', function () {
  bench('for .. in ..', function () {
    for (var k in obj) {
      obj[k]
    }
  })

  bench('Object.keys', function () {
    var keys = Object.keys(obj)
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]]
    }
  })

  bench('lodash.forEach', function () {
    _.forEach(obj, function (value, key) {
      value
    })
  })
})