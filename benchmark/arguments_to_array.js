const _ = require("lodash");

var args = (function () {
  return arguments;
})(1, 2, 3, 4, 5);

const cases = [
  {
    name: "[].slice.apply",
    fn: function () {
      /*
    every invode would create a literal empty Array
  */
      var a = [].slice.apply(args);
    },
  },
  {
    name: "[].slice.call",
    fn: function () {
      var a = [].slice.call(args);
    },
  },
  {
    name: "Array.prototype.slice.apply",
    fn: function () {
      var a = Array.prototype.slice.apply(args);
    },
  },
  {
    name: "Array.prototype.slice.call",
    fn: function () {
      var a = Array.prototype.slice.call(args);
    },
  },
  {
    name: "lodash.toArray",
    fn: function () {
      /*
    use while loop
  */
      var a = _.toArray(args);
    },
  },
];

exports = module.exports = { cases };
