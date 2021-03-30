var _ = require("lodash");

var arr = _.range(100000);

const cases = [
  {
    name: "normal for loop. i < arr.length",
    fn: function () {
      for (var i = 0; i < arr.length; i++) {
        arr[i] + 1;
      }
    },
  },
  {
    name: "normal for loop. cache arr.length",
    fn: function () {
      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i] + 1;
      }
    },
  },
  {
    name: "native forEach",
    fn: function () {
      arr.forEach(function (item) {
        item + 1;
      });
    },
  },
  {
    name: "lodash.forEach",
    fn: function () {
      _.forEach(arr, function (item) {
        item + 1;
      });
    },
  },
];

exports = module.exports = { cases };
