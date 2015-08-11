var _ = require('lodash');

var obj1 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            name: 'alsotang',
            at: 'china',
          }
        }
      }
    }
  }
}

// !!!!NOTICE
// According to what kind of element you want,
// result of the three is not always the same.


/*
the JSON approach doesn't work with objects well (like date, regexp, string object, functions).
Lodash handles them as well as typed arrays and array buffers.
-- by @jdalton
*/
suite('clone_object', function () {
  bench('JSON.parse(JSON.stringify)', function () {
    var obj2 = JSON.parse(JSON.stringify(obj1))
  })

  bench('lodash.cloneDeep', function () {
    var obj2 = _.cloneDeep(obj1);
  })

  bench('lodash.clone. this is shadow clone', function () {
    var obj2 = _.clone(obj1);
  })
})