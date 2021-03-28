var assert = require('assert')
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()
var _ = require('lodash')

suite.add('yield', function () {
  var yieldFn = function () {
    var num = 0;
    return function* () {
      while (true) {
        yield num++
      }
    }
  }

  var gen = yieldFn()();
  for (var i = 0; i < 100000; i++) {
    gen.next()
  }

  assert(gen.next().value == 100000)
})

suite.add('yield*', function () {
  var arr = _.range(100001);
  var yieldFn = function* () {
    yield* arr;
  }

  var gen = yieldFn();
  for (var i = 0; i < 100000; i++) {
    gen.next()
  }

  assert(gen.next().value == 100000)
})

suite.add('closure', function () {
  var closureFn = function () {
    var i = 0;
    return function () {
      return i++;
    }
  }
  var fn = closureFn()
  for (var i = 0; i < 100000; i++) {
    fn()
  }

  assert(fn() == 100000)
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()