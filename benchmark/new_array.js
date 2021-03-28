/*
http://stackoverflow.com/questions/7375120/why-is-arr-faster-than-arr-new-array
*/

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

suite.add('new Array()', function () {
  var a = new Array();
})

suite.add('[]', function () {
  var a = [];
})

suite.add('[] and assign', function () {
  var a = []
  for (var i = 0; i < 1000000; i++) {
    a[i] = i
  }
})

suite.add('new Array(length) and assign', function () {
  var a = new Array(1000000);
  for (var i = 0; i < 1000000; i++) {
    a[i] = i
  }
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()