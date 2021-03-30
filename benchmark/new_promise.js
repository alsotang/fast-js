var bluebird = require("bluebird");
var co = require("co");

const cases = [
  {
    name: "native `new promise`",
    fn: function (next) {
      new Promise(function (resolve, reject) {
        resolve(1);
      }).then(next);
    },
  },
  {
    name: "bluebird `new promise`",
    fn: function (next) {
      new bluebird(function (resolve, reject) {
        resolve(1);
      }).then(next);
    },
  },
  {
    name: "native promise.resolve",
    fn: function (next) {
      Promise.resolve(1).then(next);
    },
  },
  {
    name: "bluebird promise.resolve",
    fn: function (next) {
      bluebird.resolve(1).then(next);
    },
  },
  {
    name: "co",
    fn: function (next) {
      co(function* () {
        return 1;
      }).then(next);
    },
  },
];

exports = module.exports = { cases };
