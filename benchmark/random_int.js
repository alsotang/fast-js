var _ = require("lodash");

const cases = [
  {
    name: "Math.random % range",
    fn: function () {
      var num = ~~(Math.random() * 1000);
    },
  },
  {
    name: "lodash.random",
    fn: function () {
      var num = _.random(1000);
    },
  },
];

exports = module.exports = { cases };
