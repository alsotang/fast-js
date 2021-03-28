var _ = require('lodash')
const Benchmark = require('benchmark');
var testSet = new Set(_.range(100))

const suite = new Benchmark.Suite()

suite.add('Array.from', function () {
  Array.from(testSet)
})

suite.add('Set#forEach', function () {
  var arr = [];

  testSet.forEach(function (v) {
    arr.push(v)
  })
})

suite.add('arr[index]', function () {
  var arr = new Array(testSet.size);

  var index = 0;
  testSet.forEach(function (v) {
    arr[index++] = v
  })
})

suite.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run()