var assert = require("assert");
var _ = require("lodash");

const cases = [
  {
    name: "yield",
    fn: function () {
      var yieldFn = function () {
        var num = 0;
        return function* () {
          while (true) {
            yield num++;
          }
        };
      };

      var gen = yieldFn()();
      for (var i = 0; i < 100000; i++) {
        gen.next();
      }

      assert(gen.next().value == 100000);
    },
  },
  {
    name: "yield*",
    fn: function () {
      var arr = _.range(100001);
      var yieldFn = function* () {
        yield* arr;
      };

      var gen = yieldFn();
      for (var i = 0; i < 100000; i++) {
        gen.next();
      }

      assert(gen.next().value == 100000);
    },
  },
  {
    name: "closure",
    fn: function () {
      var closureFn = function () {
        var i = 0;
        return function () {
          return i++;
        };
      };
      var fn = closureFn();
      for (var i = 0; i < 100000; i++) {
        fn();
      }

      assert(fn() == 100000);
    },
  },
];

exports = module.exports = { cases };
