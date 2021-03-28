var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var arr = _.range(100000);

suite.add('normal for loop. i < arr.length', function () {
  for (var i = 0; i < arr.length; i++) {
    arr[i] + 1
  }
})

suite.add('normal for loop. cache arr.length', function () {
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] + 1
  }
})

suite.add('native forEach', function () {
  arr.forEach(function (item) {
    item + 1
  })
})

suite.add('lodash.forEach', function () {
  _.forEach(arr, function (item) {
    item + 1
  })
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()
