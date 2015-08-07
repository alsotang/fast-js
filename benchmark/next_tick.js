suite('next_tick', function () {
  bench('process.nextTick', function () {
    var a = 0;
    for (var i = 0; i < 1000; i++) {
      process.nextTick(function () {
        a++
      })
    }
  })

  bench('setTimeout(0)', function () {
    var a = 0
    for (var i = 0; i < 1000; i++) {
      setTimeout(function () {
        a++
      }, 0)
    }
  })

  bench('setImmediate', function () {
    var a = 0;
    for (var i = 0; i < 1000; i++) {
      setImmediate(function () {
        a++;
      })
    }
  })
});