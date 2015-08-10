var _ = require('lodash');

var arr = _.range(1000);

suite('sample_from_array', function () {
  bench('Math.random % arr.length', function () {
    var index = Math.random() * 10000 % arr.length ;
    var sample = arr[index]
  })

  bench('lodash.sample', function () {
    var sample = _.sample(arr);
  })
})