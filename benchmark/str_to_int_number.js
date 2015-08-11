var str = '100';

suite('str_to_int_number', function () {
  bench('+str', function () {
    var a = +str;
  })

  bench('~~str', function () {
    var a = ~~str
  })

  bench('Number(str)', function () {
    var a = Number(str)
  })

  bench('parseInt(str)', function () {
    var a = parseInt(str)
  })

  bench('parseInt(str, 10)', function () {
    var a = parseInt(str, 10)
  })

})

