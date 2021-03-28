var co = require('co')
var bluebird = require('bluebird')
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

suite.add('co.wrap', function (deferred) {
  co.wrap(function* () {
    for (var i = 0; i < 1000; i++) {
      yield Promise.resolve(1)
    }
  })().then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.add('bluebird.coroutine', function (deferred) {
  bluebird.coroutine(function* () {
    for (var i = 0; i < 1000; i++) {
      yield Promise.resolve(1)
    }
  })().then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()