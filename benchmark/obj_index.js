var obj = {
  1: "a",
  b: "c",
};

const cases = [
  {
    name: "number index `1`",
    fn: function () {
      for (var i = 0; i < 10000000; i++) {
        obj[1];
      }
    },
  },
  {
    name: "string index `1`",
    fn: function () {
      for (var i = 0; i < 10000000; i++) {
        obj["1"];
      }
    },
  },
  {
    name: "dot index `b`",
    fn: function () {
      for (var i = 0; i < 10000000; i++) {
        obj.b;
      }
    },
  },
  {
    name: "string index `b`",
    fn: function () {
      for (var i = 0; i < 10000000; i++) {
        obj["b"];
      }
    },
  },
];

exports = module.exports = { cases };
