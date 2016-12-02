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

  bench('[] and assign', function () {
    var a = []
    for (var i = 0; i < 1000000; i++) {
      a[i] = i
    }
  })

  bench('new Array(length) and assign', function () {
    var a = new Array(1000000);
    for (var i = 0; i < 1000000; i++) {
      a[i] = i
    }
  })
})