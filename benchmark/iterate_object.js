var _ = require("lodash");

var obj = { a: 1, b: 2, c: 3, d: 4, e: 5, "-": 6 };

// maybe we should check .hasOwnProperty here

const cases = [
  {
    name: "for .. in ..",
    fn: function () {
      for (var k in obj) {
        obj[k];
      }
    },
  },
  {
    name: "Object.keys",
    fn: function () {
      Object.keys(obj).forEach(function (key) {
        obj[key];
      });
    },
  },
  {
    name: "lodash.forEach",
    fn: function () {
      _.forEach(obj, function (value, key) {
        value;
      });
    },
  },
];

exports = module.exports = { cases };
