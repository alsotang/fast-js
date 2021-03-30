/*
http://stackoverflow.com/questions/7375120/why-is-arr-faster-than-arr-new-array
*/

const cases = [
  {
    name: "new Array()",
    fn: function () {
      var a = new Array();
    },
  },
  {
    name: "[]",
    fn: function () {
      var a = [];
    },
  },
  {
    name: "[] and assign",
    fn: function () {
      var a = [];
      for (var i = 0; i < 1000000; i++) {
        a[i] = i;
      }
    },
  },
  {
    name: "new Array(length) and assign",
    fn: function () {
      var a = new Array(1000000);
      for (var i = 0; i < 1000000; i++) {
        a[i] = i;
      }
    },
  },
];

exports = module.exports = { cases };
