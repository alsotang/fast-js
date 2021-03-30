var str = "Teste 1,\n 52,56368,9)7(9.9q7w7,*e*d*/;7.b/,a";
var regex = /[^aeiou0-9\s]/;

const cases = [
  {
    name: "String.match",
    fn: function () {
      var m = str.match(regex);
    },
  },
  {
    name: "Regex.exec",
    fn: function () {
      var m = regex.exec(str);
    },
  },
  {
    name: "String.search",
    fn: function () {
      var m = str.search(regex);
    },
  },
  {
    name: "test",
    fn: function () {
      var m = regex.test(str);
    },
  },
];

exports = module.exports = { cases };
