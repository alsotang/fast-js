var _ = require('lodash');

var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

// maybe we should check .hasOwnProperty here
suite('iterate_object', function () {
  bench('for .. in ..', function () {
    for (var k in obj) {
      obj[k]
    }
  })

  bench('Object.keys', function () {
    Object.keys(obj).forEach(function (key) {
      obj[key]
    })
  })

  bench('lodash.forEach', function () {
    _.forEach(obj, function (value, key) {
      value
    })
  })
})