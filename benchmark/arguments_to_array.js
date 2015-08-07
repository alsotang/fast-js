var _ = require('lodash');

var args = (function () {
  return arguments;
})(1, 2, 3, 4, 5);


suite('arguments_to_array', function () {
  bench('[].slice.apply', function () {
    var a = [].slice.apply(args);
  })

  bench('[].slice.call', function () {
    var a = [].slice.call(args);
  })

  bench('Array.prototype.slice.apply', function () {
    var a = Array.prototype.slice.apply(args);
  })

  bench('Array.prototype.slice.call', function () {
    var a = Array.prototype.slice.call(args);
  })

  bench('lodash.toArray', function () {
    var a = _.toArray(args);
  })
})