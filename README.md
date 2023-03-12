# fast-js

:heart_eyes: Writing fast JavaScript on Node.js and QuickJS

Here are many benchmark results produced from Node.js and QuickJS runtime.

# env

- Node.js: 19.7.0
- v8: 10.8.168.25-node.11
- QuickJS: QuickJS version 2021-03-27

# benchmark


[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 22,420,279 ops/sec ±0.30% (97 runs sampled)
[].slice.call x 22,448,514 ops/sec ±0.63% (94 runs sampled)
Array.prototype.slice.apply x 22,692,906 ops/sec ±0.20% (96 runs sampled)
Array.prototype.slice.call x 22,427,875 ops/sec ±0.47% (96 runs sampled)
lodash.toArray x 10,996,166 ops/sec ±0.16% (98 runs sampled)
Fastest is Array.prototype.slice.apply
```

QuickJS output:

```
[].slice.apply x 940,288 ops/sec ±0.11% (66 runs sampled)
[].slice.call x 965,813 ops/sec ±0.14% (67 runs sampled)
Array.prototype.slice.apply x 982,746 ops/sec ±0.16% (67 runs sampled)
Array.prototype.slice.call x 1,018,669 ops/sec ±0.14% (67 runs sampled)
lodash.toArray x 417,679 ops/sec ±0.16% (59 runs sampled)
Fastest is Array.prototype.slice.call
```



[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 3,308,311 ops/sec ±0.30% (97 runs sampled)
Set#forEach x 682,543 ops/sec ±0.26% (95 runs sampled)
arr[index] x 790,529 ops/sec ±0.12% (98 runs sampled)
Fastest is Array.from
```

QuickJS output:

```
Array.from x 166,771 ops/sec ±0.41% (65 runs sampled)
Set#forEach x 70,539 ops/sec ±0.35% (64 runs sampled)
arr[index] x 121,853 ops/sec ±0.40% (64 runs sampled)
Fastest is Array.from
```



[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 342,741 ops/sec ±0.24% (95 runs sampled)
lodash.cloneDeep x 277,438 ops/sec ±0.41% (90 runs sampled)
lodash.clone. this is shallow clone x 2,263,402 ops/sec ±0.08% (90 runs sampled)
Fastest is lodash.clone. this is shallow clone
```

QuickJS output:

```
JSON.parse(JSON.stringify) x 124,549 ops/sec ±0.20% (61 runs sampled)
lodash.cloneDeep x 21,672 ops/sec ±0.91% (67 runs sampled)
lodash.clone. this is shallow clone x 252,017 ops/sec ±0.19% (67 runs sampled)
Fastest is lodash.clone. this is shallow clone
```



[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 9,849 ops/sec ±0.44% (87 runs sampled)
bluebird.coroutine x 82.25 ops/sec ±0.48% (79 runs sampled)
Fastest is co.wrap
```

QuickJS output:

```
co.wrap x 353 ops/sec ±0.19% (63 runs sampled)
bluebird.coroutine x 76.83 ops/sec ±0.15% (62 runs sampled)
Fastest is co.wrap
```



[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 16,533 ops/sec ±0.06% (98 runs sampled)
normal for loop. cache arr.length x 16,539 ops/sec ±0.03% (100 runs sampled)
native forEach x 951 ops/sec ±0.13% (94 runs sampled)
lodash.forEach x 1,044 ops/sec ±0.25% (96 runs sampled)
Fastest is normal for loop. cache arr.length,normal for loop. i < arr.length
```

QuickJS output:

```
normal for loop. i < arr.length x 323 ops/sec ±0.15% (63 runs sampled)
normal for loop. cache arr.length x 422 ops/sec ±0.17% (65 runs sampled)
native forEach x 236 ops/sec ±0.19% (61 runs sampled)
lodash.forEach x 165 ops/sec ±0.22% (61 runs sampled)
Fastest is normal for loop. cache arr.length
```



[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 593,008,455 ops/sec ±0.33% (96 runs sampled)
withHiddenClass x 592,211,394 ops/sec ±0.09% (97 runs sampled)
Fastest is withHiddenClass
```

QuickJS output:

```
withoutHiddenClass x 1,558,953 ops/sec ±0.27% (67 runs sampled)
withHiddenClass x 1,450,963 ops/sec ±0.31% (67 runs sampled)
Fastest is withoutHiddenClass
```



[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 588,177,701 ops/sec ±0.29% (95 runs sampled)
outter x 590,210,535 ops/sec ±0.11% (98 runs sampled)
Fastest is outter
```

QuickJS output:

```
inner x 2,111,907 ops/sec ±0.15% (66 runs sampled)
outter x 6,111,227 ops/sec ±0.23% (55 runs sampled)
Fastest is outter
```



[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 102,582,561 ops/sec ±0.76% (93 runs sampled)
lodash.isEmpty(obj) x 16,100,344 ops/sec ±0.23% (98 runs sampled)
JSON.stringify(obj) == {} x 9,652,633 ops/sec ±0.20% (96 runs sampled)
Array.length === 0 x 590,246,087 ops/sec ±0.31% (98 runs sampled)
lodash.isEmpty(arr) x 16,212,321 ops/sec ±0.21% (98 runs sampled)
Fastest is Array.length === 0
```

QuickJS output:

```
Object.keys().length === 0 x 3,516,456 ops/sec ±0.19% (65 runs sampled)
lodash.isEmpty(obj) x 848,532 ops/sec ±0.17% (60 runs sampled)
JSON.stringify(obj) == {} x 1,044,491 ops/sec ±0.09% (68 runs sampled)
Array.length === 0 x 8,692,101 ops/sec ±0.45% (67 runs sampled)
lodash.isEmpty(arr) x 989,557 ops/sec ±0.14% (66 runs sampled)
Fastest is Array.length === 0
```



[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 88,202,202 ops/sec ±0.55% (92 runs sampled)
Object.keys x 10,296,848 ops/sec ±0.22% (94 runs sampled)
lodash.forEach x 6,293,506 ops/sec ±0.25% (98 runs sampled)
Fastest is for .. in ..
```

QuickJS output:

```
for .. in .. x 718,486 ops/sec ±0.29% (66 runs sampled)
Object.keys x 516,502 ops/sec ±0.14% (67 runs sampled)
lodash.forEach x 264,105 ops/sec ±0.13% (66 runs sampled)
Fastest is for .. in ..
```



[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 494 ops/sec ±0.67% (88 runs sampled)
normal loop. use index x 522 ops/sec ±0.54% (91 runs sampled)
new Array(arr.length) x 1,474 ops/sec ±0.23% (94 runs sampled)
native map x 526 ops/sec ±0.53% (91 runs sampled)
lodash.forEach x 622 ops/sec ±0.62% (91 runs sampled)
Fastest is new Array(arr.length)
```

QuickJS output:

```
normal loop. use push x 66.62 ops/sec ±0.71% (50 runs sampled)
normal loop. use index x 127 ops/sec ±0.28% (59 runs sampled)
new Array(arr.length) x 125 ops/sec ±0.28% (58 runs sampled)
native map x 104 ops/sec ±0.19% (60 runs sampled)
lodash.forEach x 107 ops/sec ±0.29% (56 runs sampled)
Fastest is normal loop. use index
```



[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 588,630,799 ops/sec ±0.53% (92 runs sampled)
[] x 591,918,305 ops/sec ±0.10% (98 runs sampled)
[] and assign x 52.80 ops/sec ±1.42% (68 runs sampled)
new Array(length) and assign x 316 ops/sec ±0.63% (89 runs sampled)
Fastest is []
```

QuickJS output:

```
new Array() x 3,210,533 ops/sec ±0.20% (66 runs sampled)
[] x 5,612,233 ops/sec ±0.19% (66 runs sampled)
[] and assign x 34.52 ops/sec ±0.56% (46 runs sampled)
new Array(length) and assign x 35.21 ops/sec ±0.33% (47 runs sampled)
Fastest is []
```



[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 8,698,650 ops/sec ±0.67% (88 runs sampled)
bluebird `new promise` x 15,615 ops/sec ±0.39% (84 runs sampled)
native promise.resolve x 11,007,499 ops/sec ±0.53% (86 runs sampled)
bluebird promise.resolve x 15,961 ops/sec ±0.31% (89 runs sampled)
co x 494,601 ops/sec ±0.85% (88 runs sampled)
Fastest is native promise.resolve
```

QuickJS output:

```
native `new promise` x 295,727 ops/sec ±0.22% (59 runs sampled)
bluebird `new promise` x 88,457 ops/sec ±0.14% (64 runs sampled)
native promise.resolve x 300,930 ops/sec ±0.20% (64 runs sampled)
bluebird promise.resolve x 104,206 ops/sec ±0.19% (64 runs sampled)
co x 110,070 ops/sec ±0.69% (60 runs sampled)
Fastest is native promise.resolve
```



[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 249 ops/sec ±0.02% (90 runs sampled)
string index `1` x 249 ops/sec ±0.02% (90 runs sampled)
dot index `b` x 249 ops/sec ±0.01% (90 runs sampled)
string index `b` x 249 ops/sec ±0.01% (90 runs sampled)
Fastest is string index `b`,dot index `b`,number index `1`
```

QuickJS output:

```
number index `1` x 3.83 ops/sec ±0.44% (14 runs sampled)
string index `1` x 3.09 ops/sec ±0.19% (12 runs sampled)
dot index `b` x 4.38 ops/sec ±0.14% (15 runs sampled)
string index `b` x 2.64 ops/sec ±0.36% (11 runs sampled)
Fastest is dot index `b`
```



[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 88,586,385 ops/sec ±0.30% (95 runs sampled)
lodash.random x 58,950,769 ops/sec ±0.25% (94 runs sampled)
Fastest is Math.random % range
```

QuickJS output:

```
Math.random % range x 5,507,277 ops/sec ±0.32% (66 runs sampled)
lodash.random x 1,728,663 ops/sec ±0.14% (67 runs sampled)
Fastest is Math.random % range
```



[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 22,361,873 ops/sec ±0.23% (97 runs sampled)
Regex.exec x 24,495,232 ops/sec ±0.26% (95 runs sampled)
String.search x 32,979,505 ops/sec ±0.12% (98 runs sampled)
test x 41,783,349 ops/sec ±0.93% (98 runs sampled)
Fastest is test
```

QuickJS output:

```
String.match x 851,659 ops/sec ±0.13% (67 runs sampled)
Regex.exec x 1,054,563 ops/sec ±0.18% (66 runs sampled)
String.search x 845,103 ops/sec ±0.17% (60 runs sampled)
test x 969,057 ops/sec ±0.27% (67 runs sampled)
Fastest is Regex.exec
```



[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 77,100,706 ops/sec ±0.40% (94 runs sampled)
lodash.sample x 75,686,572 ops/sec ±0.22% (96 runs sampled)
Fastest is Math.random % arr.length
```

QuickJS output:

```
Math.random % arr.length x 4,707,656 ops/sec ±0.11% (67 runs sampled)
lodash.sample x 2,770,724 ops/sec ±0.28% (67 runs sampled)
Fastest is Math.random % arr.length
```



[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 36,988,104 ops/sec ±0.24% (95 runs sampled)
indexOf === 0 x 591,613,760 ops/sec ±0.16% (96 runs sampled)
lodash.startsWith x 586,243,127 ops/sec ±0.15% (94 runs sampled)
Fastest is indexOf === 0
```

QuickJS output:

```
regex /^ab/ x 839,571 ops/sec ±0.18% (67 runs sampled)
indexOf === 0 x 5,899,069 ops/sec ±0.24% (53 runs sampled)
lodash.startsWith x 1,990,439 ops/sec ±0.18% (66 runs sampled)
Fastest is indexOf === 0
```



[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 589,022,865 ops/sec ±0.49% (95 runs sampled)
+= x 590,854,420 ops/sec ±0.13% (96 runs sampled)
arr.join('') x 6,150,158 ops/sec ±0.34% (97 runs sampled)
str.concat x 590,290,792 ops/sec ±0.12% (97 runs sampled)
Fastest is +=,str.concat,+
```

QuickJS output:

```
+ x 4,568,997 ops/sec ±1.29% (64 runs sampled)
+= x 3,306,686 ops/sec ±0.93% (59 runs sampled)
arr.join('') x 1,306,007 ops/sec ±0.98% (60 runs sampled)
str.concat x 4,083,164 ops/sec ±0.92% (65 runs sampled)
Fastest is +
```



[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 591,555,625 ops/sec ±0.16% (97 runs sampled)
~~str x 591,189,893 ops/sec ±0.09% (98 runs sampled)
Number(str) x 590,851,241 ops/sec ±0.19% (97 runs sampled)
parseInt(str) x 215,256,987 ops/sec ±0.44% (94 runs sampled)
parseInt(str, 10) x 203,432,942 ops/sec ±0.37% (93 runs sampled)
str - 0 x 591,344,941 ops/sec ±0.14% (97 runs sampled)
Fastest is ~~str,str - 0,Number(str)
```

QuickJS output:

```
+str x 6,245,957 ops/sec ±0.12% (64 runs sampled)
~~str x 5,853,389 ops/sec ±0.15% (65 runs sampled)
Number(str) x 4,878,886 ops/sec ±0.34% (45 runs sampled)
parseInt(str) x 4,762,535 ops/sec ±0.22% (44 runs sampled)
parseInt(str, 10) x 5,173,711 ops/sec ±0.12% (66 runs sampled)
str - 0 x 5,991,062 ops/sec ±0.15% (67 runs sampled)
Fastest is +str
```



[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 57,243 ops/sec ±0.35% (95 runs sampled)
JSON.parse without try catch x 57,092 ops/sec ±0.10% (94 runs sampled)
for loop with try catch x 531 ops/sec ±0.74% (87 runs sampled)
for loop without try catch x 531 ops/sec ±0.70% (87 runs sampled)
Fastest is JSON.parse with try catch
```

QuickJS output:

```
JSON.parse with try catch x 11,669 ops/sec ±0.21% (61 runs sampled)
JSON.parse without try catch x 11,718 ops/sec ±0.17% (62 runs sampled)
for loop with try catch x 356 ops/sec ±0.22% (65 runs sampled)
for loop without try catch x 353 ops/sec ±0.31% (64 runs sampled)
Fastest is JSON.parse without try catch
```



[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 44,707 ops/sec ±0.29% (95 runs sampled)
lodash.uniq x 40,612 ops/sec ±0.11% (96 runs sampled)
Set x 42,079 ops/sec ±0.26% (97 runs sampled)
Fastest is obj[key] = true
```

QuickJS output:

```
obj[key] = true x 12,533 ops/sec ±0.37% (65 runs sampled)
lodash.uniq x 7,176 ops/sec ±12.43% (41 runs sampled)
Set x 7,097 ops/sec ±13.45% (40 runs sampled)
Fastest is obj[key] = true
```



[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 870,369 ops/sec ±0.27% (96 runs sampled)
str.replace x 8,062,080 ops/sec ±0.25% (95 runs sampled)
custom fn x 590,969,343 ops/sec ±0.10% (97 runs sampled)
Fastest is custom fn
```

QuickJS output:

```
util.format x 149,700 ops/sec ±0.15% (66 runs sampled)
str.replace x 1,688,493 ops/sec ±0.60% (66 runs sampled)
custom fn x 3,810,283 ops/sec ±0.28% (65 runs sampled)
Fastest is custom fn
```



[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 399 ops/sec ±0.30% (91 runs sampled)
yield* x 189 ops/sec ±0.86% (87 runs sampled)
closure x 2,960 ops/sec ±0.03% (99 runs sampled)
Fastest is closure
```

QuickJS output:

```
yield x 33.38 ops/sec ±0.26% (45 runs sampled)
yield* x 25.81 ops/sec ±0.27% (46 runs sampled)
closure x 186 ops/sec ±0.29% (60 runs sampled)
Fastest is closure
```


# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
