var _ = require('lodash');

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr[i] = 'aa' + String(~~(Math.random() * 100));
}

suite('uniq_str_array', function () {
  bench('obj[key] = true', function () {
    var _map = {};
    for (var i = 0; i < arr.length; i++) {
      _map[arr[i]] = true;
    }
    var newArr = Object.keys(_map);
  });

  bench('lodash.uniq', function () {
    var newArr = _.uniq(arr);
  });

  bench('Set', function () {
    var newArr = Array.from(new Set(arr));
  })
})
