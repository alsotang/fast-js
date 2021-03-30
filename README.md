# fast-js

:heart_eyes: Writing fast JavaScript on Node.js or QuickJS

Here are many benchmark results produced from Node.js or QuickJS runtime.

# env

- Node.js: 14.16.0
- v8: 8.4.371.19-node.18
- QuickJS: QuickJS version 2021-03-27

# benchmark


[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 20,712,262 ops/sec ±1.80% (85 runs sampled)
[].slice.call x 20,236,437 ops/sec ±1.37% (89 runs sampled)
Array.prototype.slice.apply x 21,235,553 ops/sec ±0.91% (88 runs sampled)
Array.prototype.slice.call x 19,733,310 ops/sec ±1.88% (81 runs sampled)
lodash.toArray x 10,147,077 ops/sec ±1.13% (90 runs sampled)
Fastest is Array.prototype.slice.apply,[].slice.apply
```

QuickJS output:

```
[].slice.apply x 841,444 ops/sec ±1.13% (62 runs sampled)
[].slice.call x 872,450 ops/sec ±0.80% (61 runs sampled)
Array.prototype.slice.apply x 881,579 ops/sec ±1.01% (61 runs sampled)
Array.prototype.slice.call x 886,102 ops/sec ±1.04% (61 runs sampled)
lodash.toArray x 353,444 ops/sec ±2.18% (59 runs sampled)
Fastest is Array.prototype.slice.call,Array.prototype.slice.apply
```



[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 3,158,042 ops/sec ±1.01% (87 runs sampled)
Set#forEach x 455,921 ops/sec ±1.28% (85 runs sampled)
arr[index] x 511,288 ops/sec ±1.29% (89 runs sampled)
Fastest is Array.from
```

QuickJS output:

```
Array.from x 139,135 ops/sec ±0.99% (63 runs sampled)
Set#forEach x 85,475 ops/sec ±1.51% (61 runs sampled)
arr[index] x 104,763 ops/sec ±0.95% (62 runs sampled)
Fastest is Array.from
```



[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 349,432 ops/sec ±0.88% (90 runs sampled)
lodash.cloneDeep x 211,840 ops/sec ±0.90% (92 runs sampled)
lodash.clone. this is shallow clone x 1,929,135 ops/sec ±0.96% (91 runs sampled)
Fastest is lodash.clone. this is shallow clone
```

QuickJS output:

```
JSON.parse(JSON.stringify) x 118,916 ops/sec ±1.28% (61 runs sampled)
lodash.cloneDeep x 18,984 ops/sec ±1.85% (62 runs sampled)
lodash.clone. this is shallow clone x 224,103 ops/sec ±1.29% (61 runs sampled)
Fastest is lodash.clone. this is shallow clone
```



[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 7,299 ops/sec ±1.20% (80 runs sampled)
bluebird.coroutine x 72.87 ops/sec ±1.06% (84 runs sampled)
Fastest is co.wrap
```

QuickJS output:

```
co.wrap x 312 ops/sec ±1.61% (58 runs sampled)
bluebird.coroutine x 68.29 ops/sec ±0.79% (56 runs sampled)
Fastest is co.wrap
```



[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 18,442 ops/sec ±0.87% (88 runs sampled)
normal for loop. cache arr.length x 18,350 ops/sec ±0.80% (85 runs sampled)
native forEach x 664 ops/sec ±1.24% (86 runs sampled)
lodash.forEach x 679 ops/sec ±1.04% (88 runs sampled)
Fastest is normal for loop. i < arr.length,normal for loop. cache arr.length
```

QuickJS output:

```
normal for loop. i < arr.length x 297 ops/sec ±1.78% (58 runs sampled)
normal for loop. cache arr.length x 427 ops/sec ±1.50% (56 runs sampled)
native forEach x 200 ops/sec ±1.44% (52 runs sampled)
lodash.forEach x 146 ops/sec ±1.18% (57 runs sampled)
Fastest is normal for loop. cache arr.length
```



[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 683,445,967 ops/sec ±0.84% (88 runs sampled)
withHiddenClass x 656,924,977 ops/sec ±1.59% (84 runs sampled)
Fastest is withoutHiddenClass
```

QuickJS output:

```
withoutHiddenClass x 1,421,660 ops/sec ±0.87% (61 runs sampled)
withHiddenClass x 1,288,518 ops/sec ±0.63% (63 runs sampled)
Fastest is withoutHiddenClass
```



[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 846,654,758 ops/sec ±0.93% (85 runs sampled)
outter x 843,297,375 ops/sec ±0.93% (90 runs sampled)
Fastest is inner,outter
```

QuickJS output:

```
inner x 1,955,681 ops/sec ±1.04% (63 runs sampled)
outter x 5,343,820 ops/sec ±1.59% (58 runs sampled)
Fastest is outter
```



[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 85,112,006 ops/sec ±1.40% (85 runs sampled)
lodash.isEmpty(obj) x 14,497,728 ops/sec ±1.24% (90 runs sampled)
JSON.stringify(obj) == {} x 5,567,367 ops/sec ±1.26% (87 runs sampled)
Array.length === 0 x 831,239,692 ops/sec ±1.33% (88 runs sampled)
lodash.isEmpty(arr) x 15,557,770 ops/sec ±1.30% (85 runs sampled)
Fastest is Array.length === 0
```

QuickJS output:

```
Object.keys().length === 0 x 3,013,517 ops/sec ±0.86% (63 runs sampled)
lodash.isEmpty(obj) x 777,520 ops/sec ±0.89% (55 runs sampled)
JSON.stringify(obj) == {} x 1,037,739 ops/sec ±0.96% (61 runs sampled)
Array.length === 0 x 7,355,836 ops/sec ±1.22% (61 runs sampled)
lodash.isEmpty(arr) x 845,828 ops/sec ±0.94% (59 runs sampled)
Fastest is Array.length === 0
```



[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 70,126,643 ops/sec ±1.25% (87 runs sampled)
Object.keys x 9,157,699 ops/sec ±1.38% (86 runs sampled)
lodash.forEach x 4,602,807 ops/sec ±1.03% (88 runs sampled)
Fastest is for .. in ..
```

QuickJS output:

```
for .. in .. x 636,161 ops/sec ±1.38% (46 runs sampled)
Object.keys x 439,835 ops/sec ±1.38% (61 runs sampled)
lodash.forEach x 239,014 ops/sec ±0.97% (61 runs sampled)
Fastest is for .. in ..
```



[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 563 ops/sec ±1.14% (83 runs sampled)
normal loop. use index x 540 ops/sec ±1.57% (84 runs sampled)
new Array(arr.length) x 1,551 ops/sec ±2.13% (83 runs sampled)
native map x 432 ops/sec ±1.36% (82 runs sampled)
lodash.forEach x 468 ops/sec ±1.13% (84 runs sampled)
Fastest is new Array(arr.length)
```

QuickJS output:

```
normal loop. use push x 81.72 ops/sec ±1.56% (53 runs sampled)
normal loop. use index x 113 ops/sec ±0.88% (55 runs sampled)
new Array(arr.length) x 117 ops/sec ±0.90% (55 runs sampled)
native map x 73.93 ops/sec ±1.92% (44 runs sampled)
lodash.forEach x 91.25 ops/sec ±1.38% (53 runs sampled)
Fastest is new Array(arr.length)
```



[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 843,212,728 ops/sec ±1.05% (89 runs sampled)
[] x 816,612,175 ops/sec ±1.33% (88 runs sampled)
[] and assign x 48.33 ops/sec ±2.36% (62 runs sampled)
new Array(length) and assign x 305 ops/sec ±1.19% (81 runs sampled)
Fastest is new Array()
```

QuickJS output:

```
new Array() x 2,819,301 ops/sec ±1.13% (62 runs sampled)
[] x 4,551,520 ops/sec ±1.43% (63 runs sampled)
[] and assign x 34.04 ops/sec ±2.12% (45 runs sampled)
new Array(length) and assign x 35.42 ops/sec ±1.47% (47 runs sampled)
Fastest is []
```



[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 7,429,168 ops/sec ±1.20% (82 runs sampled)
bluebird `new promise` x 6,094 ops/sec ±0.91% (85 runs sampled)
native promise.resolve x 8,512,724 ops/sec ±2.58% (76 runs sampled)
bluebird promise.resolve x 6,154 ops/sec ±0.96% (81 runs sampled)
co x 408,667 ops/sec ±2.37% (80 runs sampled)
Fastest is native promise.resolve
```

QuickJS output:

```
native `new promise` x 283,779 ops/sec ±1.18% (57 runs sampled)
bluebird `new promise` x 77,917 ops/sec ±1.00% (58 runs sampled)
native promise.resolve x 278,646 ops/sec ±1.71% (59 runs sampled)
bluebird promise.resolve x 94,967 ops/sec ±1.55% (59 runs sampled)
co x 98,713 ops/sec ±0.97% (59 runs sampled)
Fastest is native `new promise`,native promise.resolve
```



[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 293 ops/sec ±0.81% (85 runs sampled)
string index `1` x 296 ops/sec ±0.90% (86 runs sampled)
dot index `b` x 280 ops/sec ±1.41% (82 runs sampled)
string index `b` x 285 ops/sec ±0.91% (82 runs sampled)
Fastest is string index `1`,number index `1`
```

QuickJS output:

```
number index `1` x 3.45 ops/sec ±1.22% (13 runs sampled)
string index `1` x 2.69 ops/sec ±1.13% (11 runs sampled)
dot index `b` x 4.50 ops/sec ±1.33% (16 runs sampled)
string index `b` x 2.30 ops/sec ±2.13% (10 runs sampled)
Fastest is dot index `b`
```



[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 81,709,975 ops/sec ±1.11% (87 runs sampled)
lodash.random x 53,929,733 ops/sec ±0.77% (90 runs sampled)
Fastest is Math.random % range
```

QuickJS output:

```
Math.random % range x 4,400,421 ops/sec ±0.97% (41 runs sampled)
lodash.random x 1,330,020 ops/sec ±1.61% (60 runs sampled)
Fastest is Math.random % range
```



[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 18,093,950 ops/sec ±1.08% (89 runs sampled)
Regex.exec x 18,879,082 ops/sec ±1.50% (86 runs sampled)
String.search x 26,394,240 ops/sec ±0.86% (88 runs sampled)
test x 34,667,076 ops/sec ±1.09% (89 runs sampled)
Fastest is test
```

QuickJS output:

```
String.match x 777,821 ops/sec ±1.53% (55 runs sampled)
Regex.exec x 949,827 ops/sec ±1.97% (61 runs sampled)
String.search x 792,269 ops/sec ±1.37% (56 runs sampled)
test x 915,363 ops/sec ±0.82% (63 runs sampled)
Fastest is Regex.exec
```



[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 67,204,003 ops/sec ±2.44% (86 runs sampled)
lodash.sample x 66,298,549 ops/sec ±1.34% (87 runs sampled)
Fastest is Math.random % arr.length
```

QuickJS output:

```
Math.random % arr.length x 4,070,120 ops/sec ±1.63% (59 runs sampled)
lodash.sample x 2,399,141 ops/sec ±0.80% (63 runs sampled)
Fastest is Math.random % arr.length
```



[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 30,691,314 ops/sec ±0.96% (89 runs sampled)
indexOf === 0 x 853,637,700 ops/sec ±0.89% (90 runs sampled)
lodash.startsWith x 832,415,407 ops/sec ±0.84% (89 runs sampled)
Fastest is indexOf === 0
```

QuickJS output:

```
regex /^ab/ x 763,404 ops/sec ±1.09% (62 runs sampled)
indexOf === 0 x 4,877,881 ops/sec ±1.63% (44 runs sampled)
lodash.startsWith x 1,575,073 ops/sec ±1.15% (61 runs sampled)
Fastest is indexOf === 0
```



[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 799,216,653 ops/sec ±0.98% (88 runs sampled)
+= x 830,010,602 ops/sec ±1.14% (89 runs sampled)
arr.join('') x 4,389,356 ops/sec ±1.56% (87 runs sampled)
str.concat x 817,220,983 ops/sec ±1.36% (86 runs sampled)
Fastest is +=,str.concat
```

QuickJS output:

```
+ x 3,785,158 ops/sec ±1.54% (57 runs sampled)
+= x 3,152,421 ops/sec ±1.06% (56 runs sampled)
arr.join('') x 1,214,762 ops/sec ±1.27% (57 runs sampled)
str.concat x 3,377,770 ops/sec ±1.48% (59 runs sampled)
Fastest is +
```



[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 839,505,051 ops/sec ±0.96% (88 runs sampled)
~~str x 831,640,736 ops/sec ±1.36% (85 runs sampled)
Number(str) x 833,055,090 ops/sec ±0.87% (86 runs sampled)
parseInt(str) x 184,531,215 ops/sec ±1.12% (83 runs sampled)
parseInt(str, 10) x 177,183,043 ops/sec ±0.77% (90 runs sampled)
str - 0 x 802,054,174 ops/sec ±1.50% (83 runs sampled)
Fastest is +str,Number(str),~~str
```

QuickJS output:

```
+str x 5,152,938 ops/sec ±1.00% (47 runs sampled)
~~str x 4,892,304 ops/sec ±0.98% (62 runs sampled)
Number(str) x 4,257,115 ops/sec ±0.73% (62 runs sampled)
parseInt(str) x 4,287,630 ops/sec ±0.70% (64 runs sampled)
parseInt(str, 10) x 4,451,377 ops/sec ±0.92% (63 runs sampled)
str - 0 x 4,816,192 ops/sec ±1.55% (60 runs sampled)
Fastest is +str
```



[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 45,467 ops/sec ±0.96% (90 runs sampled)
JSON.parse without try catch x 41,698 ops/sec ±2.15% (80 runs sampled)
for loop with try catch x 589 ops/sec ±1.42% (86 runs sampled)
for loop without try catch x 586 ops/sec ±1.34% (84 runs sampled)
Fastest is JSON.parse with try catch
```

QuickJS output:

```
JSON.parse with try catch x 9,178 ops/sec ±1.25% (49 runs sampled)
JSON.parse without try catch x 9,468 ops/sec ±0.62% (61 runs sampled)
for loop with try catch x 319 ops/sec ±1.08% (59 runs sampled)
for loop without try catch x 335 ops/sec ±1.38% (60 runs sampled)
Fastest is JSON.parse without try catch
```



[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 30,669 ops/sec ±2.15% (80 runs sampled)
lodash.uniq x 31,172 ops/sec ±1.24% (83 runs sampled)
Set x 33,890 ops/sec ±1.38% (85 runs sampled)
Fastest is Set
```

QuickJS output:

```
obj[key] = true x 10,740 ops/sec ±0.75% (56 runs sampled)
lodash.uniq x 5,905 ops/sec ±16.03% (34 runs sampled)
Set x 5,814 ops/sec ±16.25% (33 runs sampled)
Fastest is obj[key] = true
```



[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 930,572 ops/sec ±2.15% (84 runs sampled)
str.replace x 6,140,700 ops/sec ±1.25% (86 runs sampled)
custom fn x 805,228,412 ops/sec ±1.25% (86 runs sampled)
Fastest is custom fn
```

QuickJS output:

```
util.format x 133,378 ops/sec ±1.04% (61 runs sampled)
str.replace x 1,397,145 ops/sec ±0.96% (60 runs sampled)
custom fn x 3,053,919 ops/sec ±0.99% (54 runs sampled)
Fastest is custom fn
```



[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 312 ops/sec ±1.36% (81 runs sampled)
yield* x 148 ops/sec ±1.75% (67 runs sampled)
closure x 3,388 ops/sec ±0.96% (89 runs sampled)
Fastest is closure
```

QuickJS output:

```
yield x 28.25 ops/sec ±1.03% (38 runs sampled)
yield* x 20.94 ops/sec ±1.38% (38 runs sampled)
closure x 161 ops/sec ±1.56% (57 runs sampled)
Fastest is closure
```


# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
