var _ = require('lodash')
var testSet = new Set(_.range(100))

suite('array_from_set', function () {
  bench('Array.from', function () {
    Array.from(testSet)
  })

  bench('Set#forEach', function () {
    var arr = [];

    testSet.forEach(function (v) {
      arr.push(v)
    })
  })

  bench('arr[index]', function () {
    var arr = new Array(testSet.size);

    var index = 0;
    testSet.forEach(function (v) {
      arr[index++] = v
    })
  })
})
