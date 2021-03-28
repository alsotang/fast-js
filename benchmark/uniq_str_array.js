var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr[i] = 'aa' + String(~~(Math.random() * 100));
}

suite.add('obj[key] = true', function () {
  var _map = {};
  for (var i = 0; i < arr.length; i++) {
    _map[arr[i]] = true;
  }
  var newArr = Object.keys(_map);
});

suite.add('lodash.uniq', function () {
  var newArr = _.uniq(arr);
});

suite.add('Set', function () {
  var newArr = Array.from(new Set(arr));
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()