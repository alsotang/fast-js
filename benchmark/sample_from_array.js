var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var arr = _.range(1000);

suite.add('Math.random % arr.length', function () {
  var index = ~~(Math.random() * arr.length);
  var sample = arr[index]
})

suite.add('lodash.sample', function () {
  var sample = _.sample(arr);
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()