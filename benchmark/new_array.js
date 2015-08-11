/*
http://stackoverflow.com/questions/7375120/why-is-arr-faster-than-arr-new-array
*/
suite('new_array', function () {
  bench('new Array()', function () {
    var a = new Array();
  })

  bench('[]', function () {
    var a = [];
  })
})