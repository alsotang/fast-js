var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var obj = { a: 1, b: 2, c: 3, d: 4, e: 5, '-': 6 };

// maybe we should check .hasOwnProperty here
suite.add('for .. in ..', function () {
  for (var k in obj) {
    obj[k]
  }
})

suite.add('Object.keys', function () {
  Object.keys(obj).forEach(function (key) {
    obj[key]
  })
})

suite.add('lodash.forEach', function () {
  _.forEach(obj, function (value, key) {
    value
  })
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()