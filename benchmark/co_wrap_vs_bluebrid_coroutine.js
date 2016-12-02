var co = require('co')
var bluebird = require('bluebird')

suite('co_wrap_vs_bluebird_coroutine', function () {
  bench('co.wrap', function (next) {
    co.wrap(function *() {
      for (var i = 0; i < 1000; i++) {
        yield Promise.resolve(1)
      }
    })().then(next)
  })

  bench('bluebird.coroutine', function (next) {
    bluebird.coroutine(function *() {
      for (var i = 0; i < 1000; i++) {
        yield Promise.resolve(1)
      }
    })().then(next)
  })
})