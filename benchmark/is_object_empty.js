var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()


var emptyObj = {}
var emptyArr = []

suite.add('Object.keys().length === 0', function () {
  var b = Object.keys(emptyObj).length === 0
});

suite.add('lodash.isEmpty(obj)', function () {
  var b = _.isEmpty(emptyObj);
})

suite.add('JSON.stringify(obj) == {}', function () {
  var b = JSON.stringify(emptyObj) == '{}';
})

suite.add('Array.length === 0', function () {
  var b = emptyArr.length
})

suite.add('lodash.isEmpty(arr)', function () {
  var b = _.isEmpty(emptyArr)
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()