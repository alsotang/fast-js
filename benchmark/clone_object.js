var _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

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
suite.add('JSON.parse(JSON.stringify)', function () {
  var obj2 = JSON.parse(JSON.stringify(obj1))
})

suite.add('lodash.cloneDeep', function () {
  var obj2 = _.cloneDeep(obj1);
})

suite.add('lodash.clone. this is shallow clone', function () {
  var obj2 = _.clone(obj1);
})

suite.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run()