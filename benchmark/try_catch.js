var _ = require('lodash');

var obj = _.range(1000);
var str = JSON.stringify(obj);

suite('try_catch', function () {
  bench('with try catch', function () {
    try {
      JSON.parse(str);
    } catch (e) {
      console.error(e);
    }
  })

  bench('without try catch', function () {
    JSON.parse(str)
  })
})