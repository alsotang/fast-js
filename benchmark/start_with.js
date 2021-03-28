var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var str = 'abcd';


suite.add('regex /^ab/', function () {
  /^ab/.test(str);
});

suite.add('indexOf === 0', function () {
  str.indexOf('ab') === 0
})

suite.add('lodash.startsWith', function () {
  _.startsWith(str, 'ab');
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()