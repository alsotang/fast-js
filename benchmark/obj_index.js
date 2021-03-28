const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var obj = {
  '1': 'a',
  'b': 'c',
}

suite.add('number index `1`', function () {
  for (var i = 0; i < 10000000; i++) {
    obj[1]
  }
})

suite.add('string index `1`', function () {
  for (var i = 0; i < 10000000; i++) {
    obj['1']
  }
})

suite.add('dot index `b`', function () {
  for (var i = 0; i < 10000000; i++) {
    obj.b
  }
})

suite.add('string index `b`', function () {
  for (var i = 0; i < 10000000; i++) {
    obj['b']
  }
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()