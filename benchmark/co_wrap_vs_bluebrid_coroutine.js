var co = require("co");
var bluebird = require("bluebird");

const cases = [
  {
    name: "co.wrap",
    fn: function (deferred) {
      co.wrap(function* () {
        for (var i = 0; i < 1000; i++) {
          yield Promise.resolve(1);
        }
      })().then(() => {
        deferred.resolve();
      });
    },
  },
  {
    name: "bluebird.coroutine",
    fn: function (deferred) {
      bluebird
        .coroutine(function* () {
          for (var i = 0; i < 1000; i++) {
            yield Promise.resolve(1);
          }
        })()
        .then(() => {
          deferred.resolve();
        });
    },
  },
];

exports = module.exports = { cases };
