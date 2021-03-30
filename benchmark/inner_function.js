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
  return add100_2(num);
}

const cases = [
  {
    name: "inner",
    fn: function () {
      /*
    inner function would be created in each invoke
    so this is slow
  */
      innerFunc(1);
    },
  },
  {
    name: "outter",
    fn: function () {
      outterFunc(1);
    },
  },
];

exports = module.exports = { cases };
