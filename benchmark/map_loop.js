var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var arr = _.range(100000);

function plusOne(num) {
  return num + 1;
}

suite.add('normal loop. use push', function () {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(plusOne(arr[i]));
  }
})

suite.add('normal loop. use index', function () {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = plusOne(arr[i]);
  }
})

suite.add('new Array(arr.length)', function () {
  // avoid dynamic memory alloc when array grows
  var result = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    result[i] = plusOne(arr[i]);
  }
})

suite.add('native map', function () {
  var result = arr.map(function (item) {
    return plusOne(item);
  })
})

suite.add('lodash.forEach', function () {
  var result = _.map(arr, function (item) {
    return plusOne(item)
  })
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()