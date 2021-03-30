var _ = require("lodash");

var obj = _.range(1000);
var str = JSON.stringify(obj);

const cases = [
  {
    name: "JSON.parse with try catch",
    fn: function () {
      try {
        JSON.parse(str);
      } catch (e) {
        console.error(e);
      }
    },
  },
  {
    name: "JSON.parse without try catch",
    fn: function () {
      JSON.parse(str);
    },
  },
  {
    name: "for loop with try catch",
    fn: function () {
      var arr = [];
      try {
        for (var i = 0; i < 100000; i++) {
          arr[i] = i;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  {
    name: "for loop without try catch",
    fn: function () {
      var arr = [];
      for (var i = 0; i < 100000; i++) {
        arr[i] = i;
      }
    },
  },
];

exports = module.exports = { cases };
