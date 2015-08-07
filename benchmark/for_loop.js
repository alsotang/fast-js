var _ = require('lodash');

var arr = _.range(100000);

suite('for_loop', function () {
  bench('normal for loop. i < arr.length', function () {
    for (var i = 0; i < arr.length; i++) {
      arr[i]
    }
  })

  bench('normal for loop. cache arr.length', function () {
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i]
    }
  })

  bench('native forEach', function () {
    arr.forEach(function (item) {
      item
    })
  })

  bench('lodash.forEach', function () {
    _.forEach(arr, function (item) {
      item
    })
  })
})