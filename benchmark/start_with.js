var _ = require("lodash");

var str = "abcd";

const cases = [
  {
    name: "regex /^ab/",
    fn: function () {
      /^ab/.test(str);
    },
  },
  {
    name: "indexOf === 0",
    fn: function () {
      str.indexOf("ab") === 0;
    },
  },
  {
    name: "lodash.startsWith",
    fn: function () {
      _.startsWith(str, "ab");
    },
  },
];

exports = module.exports = { cases };
