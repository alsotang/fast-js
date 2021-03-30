var _ = require("lodash");

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr[i] = "aa" + String(~~(Math.random() * 100));
}

const cases = [
  {
    name: "obj[key] = true",
    fn: function () {
      var _map = {};
      for (var i = 0; i < arr.length; i++) {
        _map[arr[i]] = true;
      }
      var newArr = Object.keys(_map);
    },
  },
  {
    name: "lodash.uniq",
    fn: function () {
      var newArr = _.uniq(arr);
    },
  },
  {
    name: "Set",
    fn: function () {
      var newArr = Array.from(new Set(arr));
    },
  },
];

exports = module.exports = { cases };
