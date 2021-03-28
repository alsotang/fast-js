var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var obj = _.range(1000);
var str = JSON.stringify(obj);

suite.add('JSON.parse with try catch', function () {
  try {
    JSON.parse(str);
  } catch (e) {
    console.error(e);
  }
})

suite.add('JSON.parse without try catch', function () {
  JSON.parse(str)
})

suite.add('for loop with try catch', function () {
  var arr = []
  try {
    for (var i = 0; i < 100000; i++) {
      arr[i] = i
    }
  } catch (e) {
    console.error(e)
  }
})

suite.add('for loop without try catch', function () {
  var arr = []
  for (var i = 0; i < 100000; i++) {
    arr[i] = i
  }
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()