function innerFunc(num) {
  function add100(_num) {
    return _num + 100;
  }
  return add100(num);
}

function add100_2(num) {
  return num + 100;
}
function outterFunc(num) {
  return add100_2(num)
}

suite('inner_function', function () {
  bench('inner', function () {
    innerFunc(1)
  })

  bench('outter', function () {
    outterFunc(1)
  })
})