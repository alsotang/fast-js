const _ = require('lodash');
const Benchmark = require('benchmark');

var args = (function () {
  return arguments;
})(1, 2, 3, 4, 5);


const suite = new Benchmark.Suite()

suite.add('[].slice.apply', function () {
  /*
    every invode would create a literal empty Array
  */
  var a = [].slice.apply(args);
})

suite.add('[].slice.call', function () {
  var a = [].slice.call(args);
})

suite.add('Array.prototype.slice.apply', function () {
  var a = Array.prototype.slice.apply(args);
})

suite.add('Array.prototype.slice.call', function () {
  var a = Array.prototype.slice.call(args);
})

suite.add('lodash.toArray', function () {
  /*
    use while loop
  */
  var a = _.toArray(args);
})

suite.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run()