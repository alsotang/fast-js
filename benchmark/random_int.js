var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

suite.add('Math.random % range', function () {
  var num = ~~(Math.random() * 1000);
})

suite.add('lodash.random', function () {
  var num = _.random(1000);
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()