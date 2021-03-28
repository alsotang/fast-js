const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()

var str = 'Teste 1,\n 52,56368,9)7(9.9q7w7,*e*d*/;7.b/,a';
var regex = /[^aeiou0-9\s]/;

suite.add('String.match', function () {
	var m = str.match(regex);
})

suite.add('Regex.exec', function () {
	var m = regex.exec(str);
})

suite.add('String.search', function () {
	var m = str.search(regex);
})

suite.add('test', function () {
	var m = regex.test(str);
})

suite.on('cycle', function (event) {
	console.log(String(event.target));
})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})

suite.run()