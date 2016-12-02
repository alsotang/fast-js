var _ = require('lodash');
var emptyObj = {}
var emptyArr = []

suite('is_object_empty', function () {
  bench('Object.keys().length === 0', function () {
    var b = Object.keys(emptyObj).length === 0
  });

  bench('lodash.isEmpty(obj)', function () {
    var b = _.isEmpty(emptyObj);
  })

  bench('JSON.stringify(obj) == {}', function () {
    var b = JSON.stringify(emptyObj) == '{}';
  })

  bench('Array.length === 0', function () {
    var b = emptyArr.length
  })

  bench('lodash.isEmpty(arr)', function () {
    var b = _.isEmpty(emptyArr)
  })
});