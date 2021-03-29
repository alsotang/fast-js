# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 15.12.0
* QuickJS: QuickJS version 2021-03-27
* v8: 8.6.395.17-node.27

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 20,736,005 ops/sec ±2.40% (84 runs sampled)
[].slice.call x 24,318,296 ops/sec ±0.77% (96 runs sampled)
Array.prototype.slice.apply x 23,280,720 ops/sec ±1.59% (93 runs sampled)
Array.prototype.slice.call x 23,418,720 ops/sec ±1.51% (92 runs sampled)
lodash.toArray x 11,966,359 ops/sec ±1.25% (88 runs sampled)
Fastest is [].slice.call,Array.prototype.slice.call

```

QuickJS output:

```
[].slice.apply x 475,234 ops/sec ±1.00% (62 runs sampled)
[].slice.call x 482,680 ops/sec ±0.61% (61 runs sampled)
Array.prototype.slice.apply x 532,516 ops/sec ±0.75% (62 runs sampled)
Array.prototype.slice.call x 516,969 ops/sec ±1.95% (62 runs sampled)
lodash.toArray x 282,997 ops/sec ±1.82% (61 runs sampled)
Fastest is Array.prototype.slice.apply

```

[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 3,729,319 ops/sec ±2.63% (82 runs sampled)
Set#forEach x 585,965 ops/sec ±3.20% (88 runs sampled)
arr[index] x 669,499 ops/sec ±1.14% (90 runs sampled)
Fastest is Array.from

```

QuickJS output:

```
Array.from x 116,915 ops/sec ±1.71% (61 runs sampled)
Set#forEach x 82,168 ops/sec ±2.67% (59 runs sampled)
arr[index] x 93,086 ops/sec ±1.45% (62 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 317,246 ops/sec ±1.80% (88 runs sampled)
lodash.cloneDeep x 210,120 ops/sec ±2.06% (82 runs sampled)
lodash.clone. this is shallow clone x 2,150,899 ops/sec ±1.85% (87 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

QuickJS output:

```
JSON.parse(JSON.stringify) x 58,644 ops/sec ±1.57% (58 runs sampled)
lodash.cloneDeep x 11,284 ops/sec ±2.61% (56 runs sampled)
lodash.clone. this is shallow clone x 139,184 ops/sec ±2.37% (60 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 7,953 ops/sec ±0.84% (80 runs sampled)
bluebird.coroutine x 50.45 ops/sec ±2.06% (79 runs sampled)
Fastest is co.wrap

```

QuickJS output:

```
co.wrap x 113 ops/sec ±3.61% (54 runs sampled)
bluebird.coroutine x 37.24 ops/sec ±0.95% (59 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 11,635 ops/sec ±1.15% (91 runs sampled)
normal for loop. cache arr.length x 17,183 ops/sec ±1.39% (89 runs sampled)
native forEach x 789 ops/sec ±2.09% (84 runs sampled)
lodash.forEach x 779 ops/sec ±1.75% (83 runs sampled)
Fastest is normal for loop. cache arr.length

```

QuickJS output:

```
normal for loop. i < arr.length x 338 ops/sec ±1.26% (58 runs sampled)
normal for loop. cache arr.length x 432 ops/sec ±3.40% (55 runs sampled)
native forEach x 210 ops/sec ±2.17% (53 runs sampled)
lodash.forEach x 171 ops/sec ±1.17% (57 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
<Test #1> x 350 ops/sec ±1.21% (87 runs sampled)
withoutHiddenClass x 793,714,307 ops/sec ±1.38% (85 runs sampled)
withHiddenClass x 847,230,659 ops/sec ±1.02% (85 runs sampled)
Fastest is withHiddenClass

```

QuickJS output:

```
<Test #1> x 0.10 ops/sec ±0.45% (5 runs sampled)
withoutHiddenClass x 922,320 ops/sec ±2.14% (63 runs sampled)
withHiddenClass x 887,361 ops/sec ±1.47% (61 runs sampled)
Fastest is withoutHiddenClass

```

[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 876,384,912 ops/sec ±1.11% (91 runs sampled)
outter x 863,126,760 ops/sec ±2.01% (91 runs sampled)
Fastest is inner,outter

```

QuickJS output:

```
inner x 1,333,420 ops/sec ±1.18% (58 runs sampled)
outter x 9,394,331 ops/sec ±1.17% (63 runs sampled)
Fastest is outter

```

[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 84,213,786 ops/sec ±2.94% (81 runs sampled)
lodash.isEmpty(obj) x 17,666,375 ops/sec ±0.44% (95 runs sampled)
JSON.stringify(obj) == {} x 5,724,457 ops/sec ±0.74% (97 runs sampled)
Array.length === 0 x 881,857,880 ops/sec ±1.34% (92 runs sampled)
lodash.isEmpty(arr) x 20,065,924 ops/sec ±1.38% (95 runs sampled)
Fastest is Array.length === 0

```

QuickJS output:

```
Object.keys().length === 0 x 1,773,278 ops/sec ±5.14% (55 runs sampled)
lodash.isEmpty(obj) x 644,863 ops/sec ±3.57% (59 runs sampled)
JSON.stringify(obj) == {} x 497,724 ops/sec ±3.82% (55 runs sampled)
Array.length === 0 x 15,511,762 ops/sec ±1.86% (62 runs sampled)
lodash.isEmpty(arr) x 994,750 ops/sec ±3.48% (58 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 101,711,319 ops/sec ±1.01% (88 runs sampled)
Object.keys x 11,479,053 ops/sec ±1.57% (92 runs sampled)
lodash.forEach x 5,794,563 ops/sec ±1.79% (90 runs sampled)
Fastest is for .. in ..

```

QuickJS output:

```
for .. in .. x 422,280 ops/sec ±1.31% (58 runs sampled)
Object.keys x 311,046 ops/sec ±1.91% (61 runs sampled)
lodash.forEach x 188,987 ops/sec ±2.65% (60 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 483 ops/sec ±1.94% (82 runs sampled)
normal loop. use index x 517 ops/sec ±1.51% (85 runs sampled)
new Array(arr.length) x 1,434 ops/sec ±1.81% (84 runs sampled)
native map x 458 ops/sec ±1.47% (84 runs sampled)
lodash.forEach x 493 ops/sec ±1.91% (82 runs sampled)
Fastest is new Array(arr.length)

```

QuickJS output:

```
normal loop. use push x 96.75 ops/sec ±0.67% (55 runs sampled)
normal loop. use index x 115 ops/sec ±3.52% (49 runs sampled)
new Array(arr.length) x 118 ops/sec ±2.39% (54 runs sampled)
native map x 96.66 ops/sec ±1.41% (55 runs sampled)
lodash.forEach x 91.71 ops/sec ±3.04% (52 runs sampled)
Fastest is new Array(arr.length),normal loop. use index

```

[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 900,703,269 ops/sec ±0.75% (93 runs sampled)
[] x 894,837,435 ops/sec ±0.89% (95 runs sampled)
[] and assign x 33.91 ops/sec ±3.31% (45 runs sampled)
new Array(length) and assign x 161 ops/sec ±1.46% (78 runs sampled)
Fastest is new Array(),[]

```

QuickJS output:

```
new Array() x 1,543,619 ops/sec ±2.14% (61 runs sampled)
[] x 3,412,540 ops/sec ±1.33% (63 runs sampled)
[] and assign x 25.72 ops/sec ±1.28% (35 runs sampled)
new Array(length) and assign x 27.19 ops/sec ±0.69% (37 runs sampled)
Fastest is []

```

[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
v8 native `new promise` x 8,245,492 ops/sec ±1.45% (81 runs sampled)
bluebird `new promise` x 2,998,188 ops/sec ±1.26% (79 runs sampled)
v8 native promise.resolve x 10,574,726 ops/sec ±0.80% (81 runs sampled)
bluebird promise.resolve x 3,546,639 ops/sec ±1.66% (79 runs sampled)
co x 548,218 ops/sec ±1.93% (81 runs sampled)
Fastest is v8 native promise.resolve

```

QuickJS output:

```
v8 native `new promise` x 122,160 ops/sec ±2.39% (57 runs sampled)
bluebird `new promise` x 54,699 ops/sec ±1.88% (58 runs sampled)
v8 native promise.resolve x 123,789 ops/sec ±2.51% (56 runs sampled)
bluebird promise.resolve x 70,007 ops/sec ±3.09% (57 runs sampled)
co x 47,381 ops/sec ±1.99% (55 runs sampled)
Fastest is v8 native promise.resolve,v8 native `new promise`

```

[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 374 ops/sec ±1.62% (89 runs sampled)
string index `1` x 379 ops/sec ±1.36% (91 runs sampled)
dot index `b` x 386 ops/sec ±0.45% (92 runs sampled)
string index `b` x 386 ops/sec ±0.39% (92 runs sampled)
Fastest is string index `b`,dot index `b`

```

QuickJS output:

```
number index `1` x 4.26 ops/sec ±2.80% (15 runs sampled)
string index `1` x 3.22 ops/sec ±5.43% (13 runs sampled)
dot index `b` x 5.37 ops/sec ±3.63% (18 runs sampled)
string index `b` x 2.84 ops/sec ±3.09% (12 runs sampled)
Fastest is dot index `b`

```

[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 114,149,914 ops/sec ±1.46% (91 runs sampled)
lodash.random x 56,054,849 ops/sec ±1.85% (90 runs sampled)
Fastest is Math.random % range

```

QuickJS output:

```
Math.random % range x 8,004,932 ops/sec ±2.36% (60 runs sampled)
lodash.random x 1,986,670 ops/sec ±1.92% (62 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 23,598,720 ops/sec ±1.77% (89 runs sampled)
Regex.exec x 26,008,371 ops/sec ±0.76% (96 runs sampled)
String.search x 34,147,911 ops/sec ±1.33% (95 runs sampled)
test x 43,831,983 ops/sec ±0.24% (96 runs sampled)
Fastest is test

```

QuickJS output:

```
String.match x 438,937 ops/sec ±2.59% (60 runs sampled)
Regex.exec x 443,752 ops/sec ±2.32% (59 runs sampled)
String.search x 444,564 ops/sec ±1.25% (61 runs sampled)
test x 448,223 ops/sec ±1.95% (61 runs sampled)
Fastest is test,Regex.exec

```

[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 90,616,364 ops/sec ±2.13% (87 runs sampled)
lodash.sample x 88,793,317 ops/sec ±1.44% (86 runs sampled)
Fastest is Math.random % arr.length

```

QuickJS output:

```
Math.random % arr.length x 6,753,219 ops/sec ±3.04% (58 runs sampled)
lodash.sample x 3,662,613 ops/sec ±3.01% (62 runs sampled)
Fastest is Math.random % arr.length

```

[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 35,471,255 ops/sec ±3.05% (88 runs sampled)
indexOf === 0 x 896,123,589 ops/sec ±0.93% (95 runs sampled)
lodash.startsWith x 884,520,712 ops/sec ±0.98% (95 runs sampled)
Fastest is indexOf === 0

```

QuickJS output:

```
regex /^ab/ x 363,415 ops/sec ±4.08% (59 runs sampled)
indexOf === 0 x 9,714,052 ops/sec ±0.81% (64 runs sampled)
lodash.startsWith x 1,886,861 ops/sec ±1.72% (62 runs sampled)
Fastest is indexOf === 0

```

[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 848,666,192 ops/sec ±2.05% (89 runs sampled)
+= x 849,911,437 ops/sec ±1.53% (89 runs sampled)
arr.join("") x 5,233,994 ops/sec ±1.61% (88 runs sampled)
str.concat x 836,110,807 ops/sec ±2.14% (88 runs sampled)
Fastest is +=,+,str.concat

```

QuickJS output:

```
+ x 5,453,403 ops/sec ±3.27% (48 runs sampled)
+= x 2,738,831 ops/sec ±2.79% (58 runs sampled)
arr.join("") x 736,186 ops/sec ±2.42% (51 runs sampled)
str.concat x 4,888,598 ops/sec ±1.25% (63 runs sampled)
Fastest is +

```

[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 884,431,320 ops/sec ±1.42% (92 runs sampled)
~~str x 907,134,212 ops/sec ±0.56% (94 runs sampled)
Number(str) x 897,803,316 ops/sec ±0.96% (92 runs sampled)
parseInt(str) x 256,286,378 ops/sec ±1.54% (91 runs sampled)
parseInt(str, 10) x 247,907,924 ops/sec ±1.48% (91 runs sampled)
str - 0 x 873,039,363 ops/sec ±1.58% (91 runs sampled)
Fastest is ~~str,Number(str)

```

QuickJS output:

```
+str x 9,701,821 ops/sec ±0.61% (65 runs sampled)
~~str x 8,245,206 ops/sec ±6.06% (58 runs sampled)
Number(str) x 6,132,093 ops/sec ±3.94% (54 runs sampled)
parseInt(str) x 6,993,344 ops/sec ±2.15% (59 runs sampled)
parseInt(str, 10) x 6,642,740 ops/sec ±2.50% (55 runs sampled)
str - 0 x 8,486,329 ops/sec ±1.97% (59 runs sampled)
Fastest is +str

```

[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 63,319 ops/sec ±1.36% (91 runs sampled)
JSON.parse without try catch x 58,287 ops/sec ±3.31% (85 runs sampled)
for loop with try catch x 481 ops/sec ±1.82% (81 runs sampled)
for loop without try catch x 497 ops/sec ±2.46% (82 runs sampled)
Fastest is JSON.parse with try catch

```

QuickJS output:

```
JSON.parse with try catch x 12,815 ops/sec ±2.69% (60 runs sampled)
JSON.parse without try catch x 10,976 ops/sec ±5.54% (53 runs sampled)
for loop with try catch x 281 ops/sec ±0.77% (55 runs sampled)
for loop without try catch x 277 ops/sec ±0.92% (56 runs sampled)
Fastest is JSON.parse with try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 38,912 ops/sec ±0.91% (91 runs sampled)
lodash.uniq x 40,736 ops/sec ±0.77% (94 runs sampled)
Set x 42,781 ops/sec ±0.30% (95 runs sampled)
Fastest is Set

```

QuickJS output:

```
obj[key] = true x 13,269 ops/sec ±0.88% (65 runs sampled)
lodash.uniq x 10,208 ops/sec ±0.32% (54 runs sampled)
Set x 10,420 ops/sec ±0.87% (64 runs sampled)
Fastest is obj[key] = true

```

[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 1,561,711 ops/sec ±0.86% (95 runs sampled)
str.replace x 9,205,638 ops/sec ±0.27% (97 runs sampled)
custom fn x 893,668,127 ops/sec ±0.76% (94 runs sampled)
Fastest is custom fn

```

QuickJS output:

```
util.format x 101,185 ops/sec ±0.72% (62 runs sampled)
str.replace x 797,510 ops/sec ±0.86% (56 runs sampled)
custom fn x 2,526,061 ops/sec ±4.00% (57 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 500 ops/sec ±0.85% (93 runs sampled)
yield* x 214 ops/sec ±0.98% (84 runs sampled)
closure x 5,003 ops/sec ±0.59% (92 runs sampled)
Fastest is closure

```

QuickJS output:

```
yield x 18.64 ops/sec ±0.68% (34 runs sampled)
yield* x 16.17 ops/sec ±0.55% (31 runs sampled)
closure x 205 ops/sec ±1.06% (53 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`