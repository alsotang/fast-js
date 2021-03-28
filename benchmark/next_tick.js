// http://stackoverflow.com/questions/15349733/setimmediate-vs-nexttick

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

suite.add('process.nextTick', function () {
  var a = 0;
  for (var i = 0; i < 100; i++) {
    process.nextTick(function () {
      a++
    })
  }
})

suite.add('setTimeout(0)', function () {
  var a = 0
  for (var i = 0; i < 100; i++) {
    setTimeout(function () {
      a++
    }, 0)
  }
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()