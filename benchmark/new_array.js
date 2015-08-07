suite('new_array', function () {
  bench('new Array()', function () {
    var a = new Array();
  })

  bench('[]', function () {
    var a = [];
  })
})