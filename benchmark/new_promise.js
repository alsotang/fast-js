var bluebird = require('bluebird')
var co = require('co')

suite('new_promise', function () {
  bench('v8 native `new promise`', function (next) {
    new Promise(function (resolve, reject) {
      resolve(1);
    }).then(next)
  })

  bench('bluebird `new promise`', function (next) {
    new bluebird(function (resolve, reject) {
      resolve(1);
    }).then(next)
  })

  bench('v8 native promise.resolve', function (next) {
    Promise.resolve(1).then(next)
  })

  bench('bluebird promise.resolve', function (next) {
    bluebird.resolve(1).then(next)
  })

  bench('co', function (next) {
    co(function *() {
      return 1
    }).then(next);
  })
})