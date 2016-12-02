var _ = require('lodash');

var obj = _.range(1000);
var str = JSON.stringify(obj);

suite('try_catch', function () {
  bench('JSON.parse with try catch', function () {
    try {
      JSON.parse(str);
    } catch (e) {
      console.error(e);
    }
  })

  bench('JSON.parse without try catch', function () {
    JSON.parse(str)
  })

  bench('for loop with try catch', function () {
    var arr = []
    try {
      for (var i = 0; i < 100000; i++) {
        arr[i] = i
      }
    } catch (e) {
      console.error(e)
    }
  })

  bench('for loop without try catch', function () {
    var arr = []
    for (var i = 0; i < 100000; i++) {
      arr[i] = i
    }
  })
})