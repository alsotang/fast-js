var bluebird = require('bluebird')
var co = require('co')
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

suite.add('v8 native `new promise`', function (deferred) {
  new Promise(function (resolve, reject) {
    resolve(1);
  }).then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.add('bluebird `new promise`', function (deferred) {
  new bluebird(function (resolve, reject) {
    resolve(1);
  }).then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.add('v8 native promise.resolve', function (deferred) {
  Promise.resolve(1).then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.add('bluebird promise.resolve', function (deferred) {
  bluebird.resolve(1).then(() => {
    deferred.resolve()
  })
}, {
  defer: true
})

suite.add('co', function (deferred) {
  co(function* () {
    return 1
  }).then(() => {
    deferred.resolve()
  });
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