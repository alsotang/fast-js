var _ = require('lodash');

var str = 'abcd';

suite('start_with', function () {

  bench('regex /^ab/', function () {
    /^ab/.test(str);
  });

  bench('indexOf === 0', function () {
    str.indexOf('ab') === 0
  })

  bench('lodash.startsWith', function () {
    _.startsWith(str, 'ab');
  })

})