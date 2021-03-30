var util = require("util");

var longString1 =
  "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle%sgooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle";
var longString2 =
  "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle$$$googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle";
var longString3 = function (_replacer) {
  return (
    "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle" +
    _replacer +
    "googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle"
  );
};

var replacer = "tablename";

const cases = [
  {
    name: "util.format",
    fn: function () {
      util.format(longString1, replacer);
    },
  },
  {
    name: "str.replace",
    fn: function () {
      longString2.replace("$$$", replacer);
    },
  },
  {
    name: "custom fn",
    fn: function () {
      longString3(replacer);
    },
  },
];

exports = module.exports = { cases };
