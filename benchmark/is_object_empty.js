var _ = require("lodash");

var emptyObj = {};
var emptyArr = [];

const cases = [
  {
    name: "Object.keys().length === 0",
    fn: function () {
      var b = Object.keys(emptyObj).length === 0;
    },
  },
  {
    name: "lodash.isEmpty(obj)",
    fn: function () {
      var b = _.isEmpty(emptyObj);
    },
  },
  {
    name: "JSON.stringify(obj) == {}",
    fn: function () {
      var b = JSON.stringify(emptyObj) == "{}";
    },
  },
  {
    name: "Array.length === 0",
    fn: function () {
      var b = emptyArr.length;
    },
  },
  {
    name: "lodash.isEmpty(arr)",
    fn: function () {
      var b = _.isEmpty(emptyArr);
    },
  },
];

exports = module.exports = { cases };
