var _ = require('lodash');

var arr = _.range(100000);

function plusOne(num) {
  return num + 1;
}

suite('map_loop', function () {
  bench('normal loop. use push', function () {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(plusOne(arr[i]));
    }
  })

  bench('normal loop. use index', function () {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result[i] = plusOne(arr[i]);
    }
  })

  bench('new Array(arr.length)', function () {
    // avoid dynamic memory alloc when array grows
    var result = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
      result[i] = plusOne(arr[i]);
    }
  })

  bench('native map', function () {
    var result = arr.map(function (item) {
      return plusOne(item);
    })
  })

  bench('lodash.forEach', function () {
    var result = _.map(arr, function (item) {
      return plusOne(item)
    })
  })
})