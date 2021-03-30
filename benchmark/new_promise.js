var bluebird = require("bluebird");
var co = require("co");

const cases = [
  {
    name: "native `new promise`",
    fn: function (deferred) {
      new Promise(function (resolve, reject) {
        resolve(1);
      }).then(() => {
        deferred.resolve();
      });
    },
  },
  {
    name: "bluebird `new promise`",
    fn: function (deferred) {
      new bluebird(function (resolve, reject) {
        resolve(1);
      }).then(() => {
        deferred.resolve();
      });
    },
  },
  {
    name: "native promise.resolve",
    fn: function (deferred) {
      Promise.resolve(1).then(() => {
        deferred.resolve();
      });
    },
  },
  {
    name: "bluebird promise.resolve",
    fn: function (deferred) {
      bluebird.resolve(1).then(() => {
        deferred.resolve();
      });
    },
  },
  {
    name: "co",
    fn: function (deferred) {
      co(function* () {
        return 1;
      }).then(() => {
        deferred.resolve();
      });
    },
  },
];

exports = module.exports = { cases };
