const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

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

suite.add('inner', function () {
  /*
    inner function would be created in each invoke
    so this is slow
  */
  innerFunc(1)
})

suite.add('outter', function () {
  outterFunc(1)
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()