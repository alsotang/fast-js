var _ = require("lodash");

var obj1 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            name: "alsotang",
            at: "china",
          },
        },
      },
    },
  },
};

// !!!!NOTICE
// According to what kind of element you want,
// result of the three is not always the same.

/*
the JSON approach doesn't work with objects well (like date, regexp, string object, functions).
Lodash handles them as well as typed arrays and array buffers.
-- by @jdalton
*/

const cases = [
  {
    name: "JSON.parse(JSON.stringify)",
    fn: function () {
      var obj2 = JSON.parse(JSON.stringify(obj1));
    },
  },
  {
    name: "lodash.cloneDeep",
    fn: function () {
      var obj2 = _.cloneDeep(obj1);
    },
  },
  {
    name: "lodash.clone. this is shallow clone",
    fn: function () {
      var obj2 = _.clone(obj1);
    },
  },
];

exports = module.exports = { cases };
