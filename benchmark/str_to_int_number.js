const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var str = '100';

suite.add('+str', function () {
  var a = +str;
})

suite.add('~~str', function () {
  var a = ~~str
})

suite.add('Number(str)', function () {
  var a = Number(str)
})

suite.add('parseInt(str)', function () {
  var a = parseInt(str)
})

suite.add('parseInt(str, 10)', function () {
  var a = parseInt(str, 10)
})

suite.add('str - 0', function () {
  var a = str - 0
})


suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()