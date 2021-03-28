# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 15.12.0
* v8: 8.6.395.17-node.27

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
[].slice.apply x 24,200,061 ops/sec ±0.33% (91 runs sampled)
[].slice.call x 24,741,288 ops/sec ±0.12% (98 runs sampled)
Array.prototype.slice.apply x 24,219,243 ops/sec ±1.22% (91 runs sampled)
Array.prototype.slice.call x 24,915,169 ops/sec ±0.41% (95 runs sampled)
lodash.toArray x 12,156,499 ops/sec ±1.11% (93 runs sampled)
Fastest is Array.prototype.slice.call

```

[array_from_set.js](benchmark/array_from_set.js)

```
Array.from x 4,450,243 ops/sec ±0.31% (89 runs sampled)
Set#forEach x 657,188 ops/sec ±0.27% (95 runs sampled)
arr[index] x 732,700 ops/sec ±1.18% (95 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)

```
JSON.parse(JSON.stringify) x 353,686 ops/sec ±0.31% (94 runs sampled)
lodash.cloneDeep x 248,866 ops/sec ±1.77% (96 runs sampled)
lodash.clone. this is shallow clone x 2,502,404 ops/sec ±0.35% (96 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co.wrap x 9,488 ops/sec ±1.22% (80 runs sampled)
bluebird.coroutine x 46.90 ops/sec ±2.08% (74 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)

```
normal for loop. i < arr.length x 12,793 ops/sec ±0.63% (95 runs sampled)
normal for loop. cache arr.length x 18,941 ops/sec ±0.44% (94 runs sampled)
native forEach x 909 ops/sec ±0.27% (95 runs sampled)
lodash.forEach x 910 ops/sec ±0.56% (95 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)

```
<Test #1> x 388 ops/sec ±0.20% (93 runs sampled)
withoutHiddenClass x 864,368,867 ops/sec ±1.40% (90 runs sampled)
withHiddenClass x 872,934,112 ops/sec ±1.33% (94 runs sampled)
Fastest is withHiddenClass,withoutHiddenClass

```

[inner_function.js](benchmark/inner_function.js)

```
inner x 888,404,556 ops/sec ±1.14% (92 runs sampled)
outter x 879,411,854 ops/sec ±1.17% (91 runs sampled)
Fastest is inner,outter

```

[is_object_empty.js](benchmark/is_object_empty.js)

```
Object.keys().length === 0 x 95,159,962 ops/sec ±1.51% (88 runs sampled)
lodash.isEmpty(obj) x 17,613,267 ops/sec ±0.77% (92 runs sampled)
JSON.stringify(obj) == {} x 5,877,981 ops/sec ±0.38% (93 runs sampled)
Array.length === 0 x 869,069,944 ops/sec ±1.29% (89 runs sampled)
lodash.isEmpty(arr) x 20,528,216 ops/sec ±0.33% (95 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)

```
for .. in .. x 100,810,146 ops/sec ±0.49% (87 runs sampled)
Object.keys x 11,857,760 ops/sec ±0.21% (94 runs sampled)
lodash.forEach x 6,007,533 ops/sec ±1.02% (94 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)

```
normal loop. use push x 569 ops/sec ±0.90% (87 runs sampled)
normal loop. use index x 545 ops/sec ±1.58% (85 runs sampled)
new Array(arr.length) x 1,602 ops/sec ±0.79% (86 runs sampled)
native map x 551 ops/sec ±0.52% (91 runs sampled)
lodash.forEach x 583 ops/sec ±1.27% (91 runs sampled)
Fastest is new Array(arr.length)

```

[new_array.js](benchmark/new_array.js)

```
new Array() x 873,235,650 ops/sec ±1.20% (90 runs sampled)
[] x 875,836,578 ops/sec ±1.31% (92 runs sampled)
[] and assign x 40.56 ops/sec ±2.07% (53 runs sampled)
new Array(length) and assign x 185 ops/sec ±1.24% (79 runs sampled)
Fastest is [],new Array()

```

[new_promise.js](benchmark/new_promise.js)

```
v8 native `new promise` x 9,357,524 ops/sec ±1.33% (79 runs sampled)
bluebird `new promise` x 2,966,337 ops/sec ±0.98% (83 runs sampled)
v8 native promise.resolve x 11,697,786 ops/sec ±0.95% (83 runs sampled)
bluebird promise.resolve x 3,740,416 ops/sec ±2.19% (79 runs sampled)
co x 606,865 ops/sec ±0.70% (84 runs sampled)
Fastest is v8 native promise.resolve

```

[next_tick.js](benchmark/next_tick.js)

```
process.nextTick x 3,664 ops/sec ±16.48% (47 runs sampled)
setTimeout(0) x 165 ops/sec ±121.93% (30 runs sampled)
setImmediate x 990 ops/sec ±23.85% (21 runs sampled)
Fastest is process.nextTick

```

[obj_index.js](benchmark/obj_index.js)

```
number index `1` x 388 ops/sec ±0.18% (93 runs sampled)
string index `1` x 385 ops/sec ±1.07% (92 runs sampled)
dot index `b` x 388 ops/sec ±0.12% (93 runs sampled)
string index `b` x 385 ops/sec ±0.75% (92 runs sampled)
Fastest is dot index `b`,number index `1`

```

[random_int.js](benchmark/random_int.js)

```
Math.random % range x 118,867,713 ops/sec ±0.81% (92 runs sampled)
lodash.random x 59,378,377 ops/sec ±0.56% (94 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)

```
String.match x 24,722,822 ops/sec ±0.38% (91 runs sampled)
Regex.exec x 26,202,512 ops/sec ±0.47% (96 runs sampled)
String.search x 34,239,984 ops/sec ±0.77% (94 runs sampled)
test x 43,523,584 ops/sec ±0.78% (96 runs sampled)
Fastest is test

```

[sample_from_array.js](benchmark/sample_from_array.js)

```
Math.random % arr.length x 95,394,594 ops/sec ±0.30% (94 runs sampled)
lodash.sample x 97,377,418 ops/sec ±0.57% (98 runs sampled)
Fastest is lodash.sample

```

[start_with.js](benchmark/start_with.js)

```
regex /^ab/ x 38,116,333 ops/sec ±0.22% (94 runs sampled)
indexOf === 0 x 875,559,205 ops/sec ±1.14% (92 runs sampled)
lodash.startsWith x 865,214,370 ops/sec ±1.52% (90 runs sampled)
Fastest is indexOf === 0,lodash.startsWith

```

[str_concat.js](benchmark/str_concat.js)

```
+ x 882,216,000 ops/sec ±1.19% (91 runs sampled)
+= x 898,954,077 ops/sec ±0.95% (90 runs sampled)
arr.join("") x 6,296,704 ops/sec ±0.65% (91 runs sampled)
str.concat x 888,235,899 ops/sec ±0.99% (93 runs sampled)
Fastest is +=,str.concat

```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
+str x 879,432,336 ops/sec ±1.25% (92 runs sampled)
~~str x 880,234,143 ops/sec ±1.37% (90 runs sampled)
Number(str) x 884,344,558 ops/sec ±1.13% (92 runs sampled)
parseInt(str) x 260,131,423 ops/sec ±4.52% (93 runs sampled)
parseInt(str, 10) x 249,054,718 ops/sec ±3.26% (92 runs sampled)
str - 0 x 890,746,313 ops/sec ±0.97% (91 runs sampled)
Fastest is str - 0,Number(str),+str,~~str

```

[try_catch.js](benchmark/try_catch.js)

```
JSON.parse with try catch x 65,510 ops/sec ±0.80% (94 runs sampled)
JSON.parse without try catch x 66,073 ops/sec ±0.28% (93 runs sampled)
for loop with try catch x 618 ops/sec ±2.24% (80 runs sampled)
for loop without try catch x 657 ops/sec ±1.07% (86 runs sampled)
Fastest is JSON.parse without try catch,JSON.parse with try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
obj[key] = true x 42,521 ops/sec ±0.28% (95 runs sampled)
lodash.uniq x 44,911 ops/sec ±0.68% (97 runs sampled)
Set x 47,318 ops/sec ±0.23% (93 runs sampled)
Fastest is Set

```

[util.format.js](benchmark/util.format.js)

```
util.format x 1,567,139 ops/sec ±1.06% (94 runs sampled)
str.replace x 9,130,379 ops/sec ±0.47% (94 runs sampled)
custom fn x 881,418,896 ops/sec ±1.11% (91 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield x 498 ops/sec ±0.92% (93 runs sampled)
yield* x 225 ops/sec ±1.02% (87 runs sampled)
closure x 5,068 ops/sec ±0.14% (97 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`