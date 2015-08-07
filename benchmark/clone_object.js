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
suite('clone_object', function () {
  bench('JSON.parse(JSON.stringify)', function () {
    var obj2 = JSON.parse(JSON.stringify(obj1))
  })

  bench('_.cloneDeep', function () {
    var obj2 = _.cloneDeep(obj1);
  })

  bench('_.clone. this is shadow clone', function () {
    var obj2 = _.clone(obj1);
  })
})