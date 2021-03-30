# fast-js

:heart_eyes: Writing fast JavaScript on Node.js or QuickJS

Here are many benchmark results produced from Node.js or QuickJS runtime.
# env

* Node.js: 14.16.0
* v8: 8.4.371.19-node.18
* QuickJS: QuickJS version 2021-03-27

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 16,594,030 ops/sec ±1.90% (81 runs sampled)
[].slice.call x 16,541,548 ops/sec ±1.42% (83 runs sampled)
Array.prototype.slice.apply x 16,314,674 ops/sec ±1.78% (84 runs sampled)
Array.prototype.slice.call x 16,470,678 ops/sec ±1.43% (87 runs sampled)
lodash.toArray x 8,041,990 ops/sec ±1.16% (88 runs sampled)
Fastest is [].slice.call,[].slice.apply,Array.prototype.slice.call,Array.prototype.slice.apply

```

QuickJS output:

```
[].slice.apply x 714,844 ops/sec ±1.22% (50 runs sampled)
[].slice.call x 729,141 ops/sec ±1.39% (51 runs sampled)
Array.prototype.slice.apply x 744,390 ops/sec ±1.28% (60 runs sampled)
Array.prototype.slice.call x 737,036 ops/sec ±1.89% (59 runs sampled)
lodash.toArray x 286,887 ops/sec ±1.50% (59 runs sampled)
Fastest is Array.prototype.slice.apply,Array.prototype.slice.call

```

[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 2,459,152 ops/sec ±1.57% (86 runs sampled)
Set#forEach x 365,673 ops/sec ±1.16% (87 runs sampled)
arr[index] x 397,901 ops/sec ±1.24% (86 runs sampled)
Fastest is Array.from

```

QuickJS output:

```
Array.from x 113,847 ops/sec ±1.30% (62 runs sampled)
Set#forEach x 71,787 ops/sec ±1.86% (59 runs sampled)
arr[index] x 83,799 ops/sec ±1.32% (61 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 275,317 ops/sec ±1.41% (84 runs sampled)
lodash.cloneDeep x 157,526 ops/sec ±1.86% (84 runs sampled)
lodash.clone. this is shallow clone x 1,463,726 ops/sec ±1.52% (86 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

QuickJS output:

```
JSON.parse(JSON.stringify) x 96,399 ops/sec ±1.07% (60 runs sampled)
lodash.cloneDeep x 15,227 ops/sec ±1.64% (58 runs sampled)
lodash.clone. this is shallow clone x 179,167 ops/sec ±1.92% (60 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 5,336 ops/sec ±1.66% (81 runs sampled)
bluebird.coroutine x 270 ops/sec ±1.65% (78 runs sampled)
Fastest is co.wrap

```

QuickJS output:

```
co.wrap x 262 ops/sec ±1.38% (57 runs sampled)
bluebird.coroutine x 49.02 ops/sec ±2.08% (49 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 14,412 ops/sec ±1.32% (84 runs sampled)
normal for loop. cache arr.length x 14,304 ops/sec ±1.81% (83 runs sampled)
native forEach x 546 ops/sec ±1.22% (85 runs sampled)
lodash.forEach x 525 ops/sec ±1.64% (83 runs sampled)
Fastest is normal for loop. i < arr.length,normal for loop. cache arr.length

```

QuickJS output:

```
normal for loop. i < arr.length x 242 ops/sec ±1.47% (48 runs sampled)
normal for loop. cache arr.length x 342 ops/sec ±1.36% (59 runs sampled)
native forEach x 154 ops/sec ±1.77% (56 runs sampled)
lodash.forEach x 120 ops/sec ±1.63% (55 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 536,971,540 ops/sec ±1.38% (85 runs sampled)
withHiddenClass x 550,398,887 ops/sec ±0.89% (88 runs sampled)
Fastest is withHiddenClass

```

QuickJS output:

```
withoutHiddenClass x 1,087,294 ops/sec ±1.30% (62 runs sampled)
withHiddenClass x 997,414 ops/sec ±1.53% (61 runs sampled)
Fastest is withoutHiddenClass

```

[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 650,194,084 ops/sec ±1.57% (84 runs sampled)
outter x 657,828,133 ops/sec ±1.20% (84 runs sampled)
Fastest is outter,inner

```

QuickJS output:

```
inner x 1,765,442 ops/sec ±1.38% (59 runs sampled)
outter x 6,231,751 ops/sec ±1.66% (54 runs sampled)
Fastest is outter

```

[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 67,340,841 ops/sec ±1.58% (85 runs sampled)
lodash.isEmpty(obj) x 11,362,682 ops/sec ±1.37% (87 runs sampled)
JSON.stringify(obj) == {} x 4,372,240 ops/sec ±1.37% (87 runs sampled)
Array.length === 0 x 657,650,658 ops/sec ±1.25% (88 runs sampled)
lodash.isEmpty(arr) x 12,746,588 ops/sec ±1.83% (82 runs sampled)
Fastest is Array.length === 0

```

QuickJS output:

```
Object.keys().length === 0 x 2,832,011 ops/sec ±1.18% (60 runs sampled)
lodash.isEmpty(obj) x 658,462 ops/sec ±1.15% (60 runs sampled)
JSON.stringify(obj) == {} x 895,188 ops/sec ±1.38% (61 runs sampled)
Array.length === 0 x 9,563,767 ops/sec ±1.08% (61 runs sampled)
lodash.isEmpty(arr) x 715,584 ops/sec ±1.01% (51 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 56,684,305 ops/sec ±1.53% (84 runs sampled)
Object.keys x 7,003,889 ops/sec ±1.87% (85 runs sampled)
lodash.forEach x 3,634,227 ops/sec ±1.49% (87 runs sampled)
Fastest is for .. in ..

```

QuickJS output:

```
for .. in .. x 540,527 ops/sec ±1.00% (61 runs sampled)
Object.keys x 387,074 ops/sec ±1.22% (54 runs sampled)
lodash.forEach x 198,487 ops/sec ±1.10% (59 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 383 ops/sec ±1.67% (82 runs sampled)
normal loop. use index x 399 ops/sec ±1.45% (81 runs sampled)
new Array(arr.length) x 1,151 ops/sec ±1.42% (81 runs sampled)
native map x 341 ops/sec ±1.32% (79 runs sampled)
lodash.forEach x 358 ops/sec ±1.69% (83 runs sampled)
Fastest is new Array(arr.length)

```

QuickJS output:

```
normal loop. use push x 66.83 ops/sec ±1.36% (49 runs sampled)
normal loop. use index x 89.50 ops/sec ±2.08% (51 runs sampled)
new Array(arr.length) x 94.03 ops/sec ±1.29% (53 runs sampled)
native map x 67.60 ops/sec ±1.45% (50 runs sampled)
lodash.forEach x 76.72 ops/sec ±1.36% (50 runs sampled)
Fastest is new Array(arr.length)

```

[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 667,230,913 ops/sec ±1.32% (88 runs sampled)
[] x 672,276,898 ops/sec ±1.26% (82 runs sampled)
[] and assign x 39.29 ops/sec ±3.03% (52 runs sampled)
new Array(length) and assign x 218 ops/sec ±1.59% (75 runs sampled)
Fastest is [],new Array()

```

QuickJS output:

```
new Array() x 2,672,177 ops/sec ±1.13% (62 runs sampled)
[] x 5,162,115 ops/sec ±1.22% (46 runs sampled)
[] and assign x 25.28 ops/sec ±1.88% (35 runs sampled)
new Array(length) and assign x 25.90 ops/sec ±1.71% (35 runs sampled)
Fastest is []

```

[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 6,013,140 ops/sec ±1.85% (76 runs sampled)
bluebird `new promise` x 2,082,631 ops/sec ±1.49% (81 runs sampled)
native promise.resolve x 7,411,304 ops/sec ±1.99% (78 runs sampled)
bluebird promise.resolve x 2,091,090 ops/sec ±1.77% (79 runs sampled)
co x 308,056 ops/sec ±2.09% (74 runs sampled)
Fastest is native promise.resolve

```

QuickJS output:

```
native `new promise` x 228,741 ops/sec ±1.63% (56 runs sampled)
bluebird `new promise` x 60,426 ops/sec ±2.12% (56 runs sampled)
native promise.resolve x 234,898 ops/sec ±1.32% (48 runs sampled)
bluebird promise.resolve x 74,995 ops/sec ±1.63% (48 runs sampled)
co x 75,340 ops/sec ±2.18% (50 runs sampled)
Fastest is native promise.resolve

```

[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 231 ops/sec ±1.42% (80 runs sampled)
string index `1` x 232 ops/sec ±1.23% (81 runs sampled)
dot index `b` x 230 ops/sec ±1.37% (80 runs sampled)
string index `b` x 233 ops/sec ±1.17% (82 runs sampled)
Fastest is string index `b`,string index `1`,number index `1`,dot index `b`

```

QuickJS output:

```
number index `1` x 2.83 ops/sec ±0.89% (12 runs sampled)
string index `1` x 2.16 ops/sec ±2.35% (10 runs sampled)
dot index `b` x 3.50 ops/sec ±2.03% (13 runs sampled)
string index `b` x 1.80 ops/sec ±1.96% (9 runs sampled)
Fastest is dot index `b`

```

[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 60,632,725 ops/sec ±3.40% (81 runs sampled)
lodash.random x 41,886,415 ops/sec ±0.97% (87 runs sampled)
Fastest is Math.random % range

```

QuickJS output:

```
Math.random % range x 4,806,204 ops/sec ±1.26% (60 runs sampled)
lodash.random x 1,219,309 ops/sec ±1.39% (60 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 13,661,963 ops/sec ±1.47% (85 runs sampled)
Regex.exec x 14,544,637 ops/sec ±1.27% (85 runs sampled)
String.search x 21,573,767 ops/sec ±1.22% (86 runs sampled)
test x 27,867,185 ops/sec ±1.44% (88 runs sampled)
Fastest is test

```

QuickJS output:

```
String.match x 690,389 ops/sec ±0.98% (61 runs sampled)
Regex.exec x 851,675 ops/sec ±1.89% (58 runs sampled)
String.search x 667,202 ops/sec ±1.44% (59 runs sampled)
test x 770,076 ops/sec ±1.24% (54 runs sampled)
Fastest is Regex.exec

```

[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 54,819,624 ops/sec ±2.19% (86 runs sampled)
lodash.sample x 52,666,759 ops/sec ±1.51% (86 runs sampled)
Fastest is Math.random % arr.length

```

QuickJS output:

```
Math.random % arr.length x 4,156,540 ops/sec ±1.16% (60 runs sampled)
lodash.sample x 2,145,553 ops/sec ±1.24% (59 runs sampled)
Fastest is Math.random % arr.length

```

[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 23,696,521 ops/sec ±1.72% (85 runs sampled)
indexOf === 0 x 650,637,537 ops/sec ±1.78% (85 runs sampled)
lodash.startsWith x 655,537,701 ops/sec ±1.42% (85 runs sampled)
Fastest is lodash.startsWith,indexOf === 0

```

QuickJS output:

```
regex /^ab/ x 634,489 ops/sec ±1.15% (60 runs sampled)
indexOf === 0 x 5,371,342 ops/sec ±1.47% (59 runs sampled)
lodash.startsWith x 1,400,000 ops/sec ±1.51% (60 runs sampled)
Fastest is indexOf === 0

```

[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 671,992,742 ops/sec ±1.37% (85 runs sampled)
+= x 673,777,342 ops/sec ±1.21% (89 runs sampled)
arr.join("") x 3,396,475 ops/sec ±2.15% (79 runs sampled)
str.concat x 667,063,020 ops/sec ±1.31% (84 runs sampled)
Fastest is +=,+,str.concat

```

QuickJS output:

```
+ x 3,925,612 ops/sec ±1.90% (56 runs sampled)
+= x 3,165,011 ops/sec ±1.18% (59 runs sampled)
arr.join("") x 1,038,617 ops/sec ±1.59% (57 runs sampled)
str.concat x 3,485,425 ops/sec ±1.53% (60 runs sampled)
Fastest is +

```

[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 664,252,890 ops/sec ±1.24% (85 runs sampled)
~~str x 659,923,557 ops/sec ±1.47% (85 runs sampled)
Number(str) x 664,765,850 ops/sec ±1.31% (83 runs sampled)
parseInt(str) x 146,553,056 ops/sec ±1.53% (86 runs sampled)
parseInt(str, 10) x 139,032,372 ops/sec ±1.43% (87 runs sampled)
str - 0 x 654,332,271 ops/sec ±1.25% (86 runs sampled)
Fastest is Number(str),+str,~~str,str - 0

```

QuickJS output:

```
+str x 5,698,022 ops/sec ±1.19% (59 runs sampled)
~~str x 5,408,321 ops/sec ±1.49% (60 runs sampled)
Number(str) x 4,349,523 ops/sec ±1.65% (59 runs sampled)
parseInt(str) x 4,576,656 ops/sec ±1.43% (62 runs sampled)
parseInt(str, 10) x 4,670,516 ops/sec ±1.03% (61 runs sampled)
str - 0 x 5,124,379 ops/sec ±1.33% (61 runs sampled)
Fastest is +str

```

[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 34,811 ops/sec ±1.57% (85 runs sampled)
JSON.parse without try catch x 35,154 ops/sec ±1.15% (86 runs sampled)
for loop with try catch x 423 ops/sec ±1.84% (76 runs sampled)
for loop without try catch x 410 ops/sec ±1.85% (77 runs sampled)
Fastest is JSON.parse without try catch,JSON.parse with try catch

```

QuickJS output:

```
JSON.parse with try catch x 8,480 ops/sec ±0.85% (45 runs sampled)
JSON.parse without try catch x 8,403 ops/sec ±1.14% (45 runs sampled)
for loop with try catch x 273 ops/sec ±1.16% (57 runs sampled)
for loop without try catch x 271 ops/sec ±1.24% (57 runs sampled)
Fastest is JSON.parse with try catch,JSON.parse without try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 27,817 ops/sec ±1.07% (87 runs sampled)
lodash.uniq x 25,895 ops/sec ±0.98% (88 runs sampled)
Set x 26,797 ops/sec ±1.08% (85 runs sampled)
Fastest is obj[key] = true

```

QuickJS output:

```
obj[key] = true x 8,420 ops/sec ±1.69% (46 runs sampled)
lodash.uniq x 4,338 ops/sec ±17.26% (26 runs sampled)
Set x 4,413 ops/sec ±17.30% (26 runs sampled)
Fastest is obj[key] = true

```

[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 916,171 ops/sec ±1.28% (88 runs sampled)
str.replace x 4,898,184 ops/sec ±1.79% (81 runs sampled)
custom fn x 661,122,296 ops/sec ±1.41% (87 runs sampled)
Fastest is custom fn

```

QuickJS output:

```
util.format x 113,491 ops/sec ±1.53% (58 runs sampled)
str.replace x 1,282,420 ops/sec ±1.44% (60 runs sampled)
custom fn x 3,456,816 ops/sec ±1.28% (62 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 266 ops/sec ±2.28% (77 runs sampled)
yield* x 133 ops/sec ±1.69% (74 runs sampled)
closure x 2,907 ops/sec ±0.80% (90 runs sampled)
Fastest is closure

```

QuickJS output:

```
yield x 23.74 ops/sec ±1.38% (42 runs sampled)
yield* x 17.89 ops/sec ±1.15% (33 runs sampled)
closure x 138 ops/sec ±0.87% (58 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)