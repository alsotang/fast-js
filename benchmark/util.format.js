const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()
var util = require('util')

var longString1 = 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle%sgooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
var longString2 = 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle$$$googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
var longString3 = function (_replacer) {
  return 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle' + _replacer + 'googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle'
}

var replacer = 'tablename';

suite.add('util.format', function () {
  util.format(longString1, replacer)
})

suite.add('str.replace', function () {
  longString2.replace('$$$', replacer)
})

suite.add('custom fn', function () {
  longString3(replacer)
})

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()