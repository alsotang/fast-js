var assert = require('assert')
var _ = require('lodash')

suite("yield_vs_closure", function () {
  bench('yield', function () {
    var yieldFn = function () {
      var num = 0;
      return function *() {
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

  bench('yield*', function () {
    var arr = _.range(100001);
    var yieldFn = function *() {
      yield* arr;
    }

    var gen = yieldFn();
    for (var i = 0; i < 100000; i++) {
      gen.next()
    }

    assert(gen.next().value == 100000)
  })

  bench('closure', function () {
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
})