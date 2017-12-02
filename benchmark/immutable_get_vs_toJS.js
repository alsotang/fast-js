var immutable = require('immutable');
var testData = immutable.fromJS([{
  a: 1,
  b: "testString",
  c: {
    obj: "obj"
  }
}]);

suite('immutable_get_vs_toJS', function () {
  bench('toJS', function () {
    var js = testData.toJS();
    var a = js.a;
    var b = js.b;
    var c = js.c;
  })

  bench('get', function () {
    var a = testData.get('a');
    var b = testData.get('b');
    var c = testData.get('c');
  })
})
