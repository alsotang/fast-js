var _ = require('lodash');

suite('random_int', function () {
  bench('Math.random % range', function () {
    var num = ~~(Math.random() * 1000);
  })

  bench('lodash.random', function () {
    var num = _.random(1000);
  })
})