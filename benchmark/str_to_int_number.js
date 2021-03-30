var str = "100";

const cases = [
  {
    name: "+str",
    fn: function () {
      var a = +str;
    },
  },
  {
    name: "~~str",
    fn: function () {
      var a = ~~str;
    },
  },
  {
    name: "Number(str)",
    fn: function () {
      var a = Number(str);
    },
  },
  {
    name: "parseInt(str)",
    fn: function () {
      var a = parseInt(str);
    },
  },
  {
    name: "parseInt(str, 10)",
    fn: function () {
      var a = parseInt(str, 10);
    },
  },
  {
    name: "str - 0",
    fn: function () {
      var a = str - 0;
    },
  },
];

exports = module.exports = { cases };
