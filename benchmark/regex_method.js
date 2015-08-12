var str = 'Teste 1,\n 52,56368,9)7(9.9q7w7,*e*d*/;7.b/,a';
var regex = /[^aeiou0-9\s]/;

suite('regex_method',function(){
	bench('String.match',function(){
		var m = str.match(regex);
	})

	bench('Regex.exec',function(){
		var m = regex.exec(str);
	})

	bench('String.search',function(){
		var m = str.search(regex);
	})

	bench('test',function(){
		var m = regex.test(str);
	})
})