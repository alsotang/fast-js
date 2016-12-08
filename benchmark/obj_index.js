var obj = {
  '1': 'a',
  'b': 'c',
}

suite('obj_index', function () {
  bench('number index `1`', function () {
    for (var i = 0; i < 10000000; i++) {
      obj[1]
    }
  })

  bench('string index `1`', function () {
    for (var i = 0; i < 10000000; i++) {
      obj['1']
    }
  })

  bench('dot index `b`', function () {
    for (var i = 0; i < 10000000; i++) {
      obj.b
    }
  })

  bench('string index `b`', function () {
    for (var i = 0; i < 10000000; i++) {
      obj['b']
    }
  })
})
