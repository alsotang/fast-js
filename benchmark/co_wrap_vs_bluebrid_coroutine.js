var co = require("co");
var bluebird = require("bluebird");

const cases = [
  {
    name: "co.wrap",
    fn: function (next) {
      co.wrap(function* () {
        for (var i = 0; i < 1000; i++) {
          yield Promise.resolve(1);
        }
      })().then(next);
    },
  },
  {
    name: "bluebird.coroutine",
    fn: function (next) {
      bluebird
        .coroutine(function* () {
          for (var i = 0; i < 1000; i++) {
            yield Promise.resolve(1);
          }
        })()
        .then(next);
    },
  },
];

exports = module.exports = { cases };
