# fast-js

:heart_eyes: Writing fast JavaScript on Node.js and QuickJS

Here are many benchmark results produced from Node.js and QuickJS runtime.

# env

- Node.js: 14.17.1
- v8: 8.4.371.23-node.67
- QuickJS: QuickJS version 2021-03-27

# benchmark


[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 19,320,061 ops/sec ±1.14% (89 runs sampled)
[].slice.call x 17,898,344 ops/sec ±1.51% (84 runs sampled)
Array.prototype.slice.apply x 17,744,889 ops/sec ±1.30% (87 runs sampled)
Array.prototype.slice.call x 18,227,873 ops/sec ±0.96% (89 runs sampled)
lodash.toArray x 10,599,063 ops/sec ±0.78% (88 runs sampled)
Fastest is [].slice.apply
```

QuickJS output:

```
[].slice.apply x 772,031 ops/sec ±1.04% (54 runs sampled)
[].slice.call x 795,961 ops/sec ±0.87% (56 runs sampled)
Array.prototype.slice.apply x 802,035 ops/sec ±1.19% (56 runs sampled)
Array.prototype.slice.call x 826,636 ops/sec ±1.29% (58 runs sampled)
lodash.toArray x 330,078 ops/sec ±1.26% (60 runs sampled)
Fastest is Array.prototype.slice.call
```



[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 2,654,046 ops/sec ±1.18% (86 runs sampled)
Set#forEach x 380,830 ops/sec ±1.08% (85 runs sampled)
arr[index] x 419,387 ops/sec ±1.03% (87 runs sampled)
Fastest is Array.from
```

QuickJS output:

```
Array.from x 123,614 ops/sec ±1.15% (61 runs sampled)
Set#forEach x 80,355 ops/sec ±1.02% (62 runs sampled)
arr[index] x 94,257 ops/sec ±1.13% (60 runs sampled)
Fastest is Array.from
```



[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 297,093 ops/sec ±1.41% (83 runs sampled)
lodash.cloneDeep x 180,876 ops/sec ±1.76% (86 runs sampled)
lodash.clone. this is shallow clone x 1,668,539 ops/sec ±1.13% (85 runs sampled)
Fastest is lodash.clone. this is shallow clone
```

QuickJS output:

```
JSON.parse(JSON.stringify) x 108,481 ops/sec ±0.72% (62 runs sampled)
lodash.cloneDeep x 18,053 ops/sec ±1.08% (60 runs sampled)
lodash.clone. this is shallow clone x 204,327 ops/sec ±1.67% (60 runs sampled)
Fastest is lodash.clone. this is shallow clone
```



[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 6,568 ops/sec ±1.34% (77 runs sampled)
bluebird.coroutine x 66.56 ops/sec ±1.24% (78 runs sampled)
Fastest is co.wrap
```

QuickJS output:

```
co.wrap x 289 ops/sec ±1.02% (59 runs sampled)
bluebird.coroutine x 62.47 ops/sec ±1.04% (53 runs sampled)
Fastest is co.wrap
```



[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 16,642 ops/sec ±1.15% (86 runs sampled)
normal for loop. cache arr.length x 17,246 ops/sec ±1.09% (86 runs sampled)
native forEach x 580 ops/sec ±1.14% (86 runs sampled)
lodash.forEach x 607 ops/sec ±1.56% (84 runs sampled)
Fastest is normal for loop. cache arr.length
```

QuickJS output:

```
normal for loop. i < arr.length x 283 ops/sec ±1.66% (56 runs sampled)
normal for loop. cache arr.length x 407 ops/sec ±1.06% (59 runs sampled)
native forEach x 191 ops/sec ±1.17% (50 runs sampled)
lodash.forEach x 146 ops/sec ±0.83% (57 runs sampled)
Fastest is normal for loop. cache arr.length
```



[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 665,428,110 ops/sec ±0.77% (91 runs sampled)
withHiddenClass x 663,730,165 ops/sec ±0.74% (87 runs sampled)
Fastest is withoutHiddenClass,withHiddenClass
```

QuickJS output:

```
withoutHiddenClass x 1,351,360 ops/sec ±0.93% (63 runs sampled)
withHiddenClass x 1,215,558 ops/sec ±1.18% (60 runs sampled)
Fastest is withoutHiddenClass
```



[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 796,008,322 ops/sec ±1.16% (88 runs sampled)
outter x 777,212,048 ops/sec ±1.08% (86 runs sampled)
Fastest is inner
```

QuickJS output:

```
inner x 1,942,320 ops/sec ±0.94% (62 runs sampled)
outter x 5,276,139 ops/sec ±0.87% (62 runs sampled)
Fastest is outter
```



[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 82,429,061 ops/sec ±1.00% (86 runs sampled)
lodash.isEmpty(obj) x 14,393,601 ops/sec ±2.29% (88 runs sampled)
JSON.stringify(obj) == {} x 5,316,100 ops/sec ±0.95% (88 runs sampled)
Array.length === 0 x 790,416,772 ops/sec ±1.05% (91 runs sampled)
lodash.isEmpty(arr) x 14,881,778 ops/sec ±2.26% (88 runs sampled)
Fastest is Array.length === 0
```

QuickJS output:

```
Object.keys().length === 0 x 2,894,837 ops/sec ±0.78% (62 runs sampled)
lodash.isEmpty(obj) x 731,788 ops/sec ±0.93% (62 runs sampled)
JSON.stringify(obj) == {} x 992,498 ops/sec ±1.41% (62 runs sampled)
Array.length === 0 x 7,018,833 ops/sec ±1.48% (61 runs sampled)
lodash.isEmpty(arr) x 794,881 ops/sec ±1.08% (56 runs sampled)
Fastest is Array.length === 0
```



[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 68,432,012 ops/sec ±0.86% (86 runs sampled)
Object.keys x 9,196,016 ops/sec ±1.60% (87 runs sampled)
lodash.forEach x 4,416,200 ops/sec ±1.16% (87 runs sampled)
Fastest is for .. in ..
```

QuickJS output:

```
for .. in .. x 617,355 ops/sec ±1.18% (60 runs sampled)
Object.keys x 454,166 ops/sec ±0.96% (63 runs sampled)
lodash.forEach x 235,672 ops/sec ±1.11% (61 runs sampled)
Fastest is for .. in ..
```



[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 483 ops/sec ±2.19% (77 runs sampled)
normal loop. use index x 529 ops/sec ±1.50% (87 runs sampled)
new Array(arr.length) x 1,533 ops/sec ±1.51% (84 runs sampled)
native map x 408 ops/sec ±1.11% (84 runs sampled)
lodash.forEach x 436 ops/sec ±0.99% (86 runs sampled)
Fastest is new Array(arr.length)
```

QuickJS output:

```
normal loop. use push x 82.88 ops/sec ±0.79% (54 runs sampled)
normal loop. use index x 107 ops/sec ±1.50% (55 runs sampled)
new Array(arr.length) x 113 ops/sec ±0.80% (53 runs sampled)
native map x 82.87 ops/sec ±1.40% (53 runs sampled)
lodash.forEach x 90.60 ops/sec ±1.19% (52 runs sampled)
Fastest is new Array(arr.length)
```



[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 801,527,418 ops/sec ±0.98% (88 runs sampled)
[] x 802,061,248 ops/sec ±0.91% (86 runs sampled)
[] and assign x 47.00 ops/sec ±2.57% (60 runs sampled)
new Array(length) and assign x 305 ops/sec ±1.56% (84 runs sampled)
Fastest is [],new Array()
```

QuickJS output:

```
new Array() x 2,614,336 ops/sec ±1.50% (59 runs sampled)
[] x 4,526,103 ops/sec ±0.98% (61 runs sampled)
[] and assign x 31.79 ops/sec ±1.38% (43 runs sampled)
new Array(length) and assign x 32.80 ops/sec ±1.42% (44 runs sampled)
Fastest is []
```



[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 7,045,484 ops/sec ±1.56% (79 runs sampled)
bluebird `new promise` x 5,964 ops/sec ±1.18% (83 runs sampled)
native promise.resolve x 8,685,530 ops/sec ±1.28% (82 runs sampled)
bluebird promise.resolve x 6,117 ops/sec ±1.02% (83 runs sampled)
co x 375,123 ops/sec ±1.99% (81 runs sampled)
Fastest is native promise.resolve
```

QuickJS output:

```
native `new promise` x 263,275 ops/sec ±0.98% (60 runs sampled)
bluebird `new promise` x 72,266 ops/sec ±1.48% (58 runs sampled)
native promise.resolve x 274,944 ops/sec ±1.03% (55 runs sampled)
bluebird promise.resolve x 88,974 ops/sec ±1.73% (59 runs sampled)
co x 94,169 ops/sec ±1.20% (56 runs sampled)
Fastest is native promise.resolve
```



[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 275 ops/sec ±0.90% (85 runs sampled)
string index `1` x 281 ops/sec ±1.03% (82 runs sampled)
dot index `b` x 281 ops/sec ±1.23% (82 runs sampled)
string index `b` x 282 ops/sec ±0.79% (84 runs sampled)
Fastest is string index `b`,dot index `b`,string index `1`
```

QuickJS output:

```
number index `1` x 3.26 ops/sec ±1.56% (13 runs sampled)
string index `1` x 2.54 ops/sec ±2.70% (11 runs sampled)
dot index `b` x 4.25 ops/sec ±1.52% (15 runs sampled)
string index `b` x 2.16 ops/sec ±1.95% (10 runs sampled)
Fastest is dot index `b`
```



[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 77,858,973 ops/sec ±2.48% (87 runs sampled)
lodash.random x 51,074,153 ops/sec ±0.87% (88 runs sampled)
Fastest is Math.random % range
```

QuickJS output:

```
Math.random % range x 4,241,712 ops/sec ±1.00% (39 runs sampled)
lodash.random x 1,318,269 ops/sec ±1.14% (61 runs sampled)
Fastest is Math.random % range
```



[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 16,980,223 ops/sec ±1.05% (87 runs sampled)
Regex.exec x 18,016,636 ops/sec ±1.88% (89 runs sampled)
String.search x 25,849,549 ops/sec ±0.95% (90 runs sampled)
test x 32,086,417 ops/sec ±2.23% (87 runs sampled)
Fastest is test
```

QuickJS output:

```
String.match x 745,217 ops/sec ±1.29% (53 runs sampled)
Regex.exec x 923,537 ops/sec ±1.01% (62 runs sampled)
String.search x 752,152 ops/sec ±0.82% (53 runs sampled)
test x 801,094 ops/sec ±0.93% (56 runs sampled)
Fastest is Regex.exec
```



[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 61,992,646 ops/sec ±2.74% (80 runs sampled)
lodash.sample x 61,958,684 ops/sec ±0.83% (85 runs sampled)
Fastest is lodash.sample
```

QuickJS output:

```
Math.random % arr.length x 3,837,031 ops/sec ±0.98% (58 runs sampled)
lodash.sample x 2,224,138 ops/sec ±1.04% (59 runs sampled)
Fastest is Math.random % arr.length
```



[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 28,870,028 ops/sec ±1.11% (86 runs sampled)
indexOf === 0 x 778,916,970 ops/sec ±1.17% (88 runs sampled)
lodash.startsWith x 723,862,296 ops/sec ±2.01% (84 runs sampled)
Fastest is indexOf === 0
```

QuickJS output:

```
regex /^ab/ x 739,019 ops/sec ±0.89% (62 runs sampled)
indexOf === 0 x 4,663,773 ops/sec ±1.59% (43 runs sampled)
lodash.startsWith x 1,487,754 ops/sec ±1.08% (62 runs sampled)
Fastest is indexOf === 0
```



[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 778,871,466 ops/sec ±0.78% (87 runs sampled)
+= x 766,641,506 ops/sec ±1.00% (87 runs sampled)
arr.join('') x 4,316,261 ops/sec ±1.34% (86 runs sampled)
str.concat x 772,251,263 ops/sec ±0.96% (87 runs sampled)
Fastest is +,str.concat
```

QuickJS output:

```
+ x 3,505,459 ops/sec ±1.40% (61 runs sampled)
+= x 2,860,511 ops/sec ±1.84% (51 runs sampled)
arr.join('') x 1,119,723 ops/sec ±1.22% (56 runs sampled)
str.concat x 3,219,941 ops/sec ±1.17% (60 runs sampled)
Fastest is +
```



[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 779,244,777 ops/sec ±1.05% (88 runs sampled)
~~str x 785,336,866 ops/sec ±0.73% (89 runs sampled)
Number(str) x 779,147,219 ops/sec ±0.87% (89 runs sampled)
parseInt(str) x 160,770,469 ops/sec ±0.98% (88 runs sampled)
parseInt(str, 10) x 154,054,526 ops/sec ±1.01% (89 runs sampled)
str - 0 x 746,069,914 ops/sec ±0.69% (86 runs sampled)
Fastest is ~~str,Number(str),+str
```

QuickJS output:

```
+str x 4,556,156 ops/sec ±1.31% (42 runs sampled)
~~str x 4,373,560 ops/sec ±0.93% (60 runs sampled)
Number(str) x 3,639,377 ops/sec ±0.86% (59 runs sampled)
parseInt(str) x 3,704,999 ops/sec ±0.84% (61 runs sampled)
parseInt(str, 10) x 3,981,940 ops/sec ±0.80% (61 runs sampled)
str - 0 x 4,220,367 ops/sec ±0.83% (63 runs sampled)
Fastest is +str
```



[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 39,413 ops/sec ±0.73% (87 runs sampled)
JSON.parse without try catch x 39,867 ops/sec ±1.04% (85 runs sampled)
for loop with try catch x 422 ops/sec ±1.08% (78 runs sampled)
for loop without try catch x 422 ops/sec ±1.10% (84 runs sampled)
Fastest is JSON.parse without try catch
```

QuickJS output:

```
JSON.parse with try catch x 9,470 ops/sec ±1.24% (61 runs sampled)
JSON.parse without try catch x 9,598 ops/sec ±0.81% (51 runs sampled)
for loop with try catch x 300 ops/sec ±1.13% (58 runs sampled)
for loop without try catch x 303 ops/sec ±0.95% (59 runs sampled)
Fastest is JSON.parse without try catch,JSON.parse with try catch
```



[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 28,091 ops/sec ±1.12% (81 runs sampled)
lodash.uniq x 29,134 ops/sec ±0.94% (87 runs sampled)
Set x 30,827 ops/sec ±0.74% (87 runs sampled)
Fastest is Set
```

QuickJS output:

```
obj[key] = true x 10,027 ops/sec ±1.01% (53 runs sampled)
lodash.uniq x 5,894 ops/sec ±13.65% (33 runs sampled)
Set x 5,408 ops/sec ±20.57% (31 runs sampled)
Fastest is obj[key] = true
```



[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 981,252 ops/sec ±0.98% (89 runs sampled)
str.replace x 5,637,305 ops/sec ±0.88% (86 runs sampled)
custom fn x 759,769,801 ops/sec ±0.89% (87 runs sampled)
Fastest is custom fn
```

QuickJS output:

```
util.format x 129,266 ops/sec ±1.10% (62 runs sampled)
str.replace x 1,340,245 ops/sec ±0.80% (64 runs sampled)
custom fn x 3,159,987 ops/sec ±0.86% (61 runs sampled)
Fastest is custom fn
```



[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 295 ops/sec ±1.99% (80 runs sampled)
yield* x 151 ops/sec ±1.62% (75 runs sampled)
closure x 3,326 ops/sec ±0.91% (90 runs sampled)
Fastest is closure
```

QuickJS output:

```
yield x 26.70 ops/sec ±1.20% (37 runs sampled)
yield* x 20.04 ops/sec ±1.21% (37 runs sampled)
closure x 156 ops/sec ±0.86% (57 runs sampled)
Fastest is closure
```


# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
