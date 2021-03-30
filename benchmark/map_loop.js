var _ = require("lodash");

var arr = _.range(100000);

function plusOne(num) {
  return num + 1;
}

const cases = [
  {
    name: "normal loop. use push",
    fn: function () {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        result.push(plusOne(arr[i]));
      }
    },
  },
  {
    name: "normal loop. use index",
    fn: function () {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        result[i] = plusOne(arr[i]);
      }
    },
  },
  {
    name: "new Array(arr.length)",
    fn: function () {
      // avoid dynamic memory alloc when array grows
      var result = new Array(arr.length);
      for (var i = 0; i < arr.length; i++) {
        result[i] = plusOne(arr[i]);
      }
    },
  },
  {
    name: "native map",
    fn: function () {
      var result = arr.map(function (item) {
        return plusOne(item);
      });
    },
  },
  {
    name: "lodash.forEach",
    fn: function () {
      var result = _.map(arr, function (item) {
        return plusOne(item);
      });
    },
  },
];

exports = module.exports = { cases };
