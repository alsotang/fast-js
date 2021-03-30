var _ = require("lodash");
var testSet = new Set(_.range(100));

const cases = [
  {
    name: "Array.from",
    fn: function () {
      Array.from(testSet);
    },
  },
  {
    name: "Set#forEach",
    fn: function () {
      var arr = [];

      testSet.forEach(function (v) {
        arr.push(v);
      });
    },
  },
  {
    name: "arr[index]",
    fn: function () {
      var arr = new Array(testSet.size);

      var index = 0;
      testSet.forEach(function (v) {
        arr[index++] = v;
      });
    },
  },
];

exports = module.exports = { cases };
