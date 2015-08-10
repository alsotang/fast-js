var _ = require('lodash');

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr[i] = String(i);
}

suite('uniq_str_array', function () {
  bench('obj[key] = true', function () {
    var _map = Object.create(null);
    for (var i = 0; i < arr.length; i++) {
      _map[arr[i]] = true;
    }
    var newArr = Object.keys(_map);
  });

  bench('lodash.uniq', function () {
    var newArr = _.uniq(arr);
  });
})