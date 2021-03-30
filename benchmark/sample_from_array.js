var _ = require("lodash");

var arr = _.range(1000);

const cases = [
  {
    name: "Math.random % arr.length",
    fn: function () {
      var index = ~~(Math.random() * arr.length);
      var sample = arr[index];
    },
  },
  {
    name: "lodash.sample",
    fn: function () {
      var sample = _.sample(arr);
    },
  },
];

exports = module.exports = { cases };
