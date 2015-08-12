var str = 'Teste 1,\n 52,56368,9)7(9.9q7w7,*e*d*/;7.b/,a',
    regex = /[^aeiou0-9\s]/g;

suite('regex_methods',function(){
	//String.match
	bench('String.match',function(){
		str.match(regex);
	})

	bench('Regex.exec',function(){
		regex.exec(str);
	})

	//String.search
	bench('String.search',function(){
		str.search(regex) !== -1;
	})

	//test
	bench('test',function(){
		regex.test(str);
	})
})