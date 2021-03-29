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
[].slice.apply x 18,482,290 ops/sec ±0.85% (90 runs sampled)
[].slice.call x 18,607,193 ops/sec ±0.59% (92 runs sampled)
Array.prototype.slice.apply x 18,605,903 ops/sec ±0.67% (89 runs sampled)
Array.prototype.slice.call x 18,282,885 ops/sec ±0.90% (91 runs sampled)
lodash.toArray x 9,406,694 ops/sec ±0.56% (92 runs sampled)
Fastest is [].slice.call,Array.prototype.slice.apply,[].slice.apply

```

QuickJS output:

```
[].slice.apply x 797,665 ops/sec ±0.57% (56 runs sampled)
[].slice.call x 814,656 ops/sec ±0.94% (62 runs sampled)
Array.prototype.slice.apply x 893,562 ops/sec ±1.16% (62 runs sampled)
Array.prototype.slice.call x 856,225 ops/sec ±0.61% (59 runs sampled)
lodash.toArray x 332,154 ops/sec ±0.44% (64 runs sampled)
Fastest is Array.prototype.slice.apply

```

[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 2,746,419 ops/sec ±0.88% (89 runs sampled)
Set#forEach x 402,246 ops/sec ±0.82% (87 runs sampled)
arr[index] x 443,697 ops/sec ±0.40% (91 runs sampled)
Fastest is Array.from

```

QuickJS output:

```
Array.from x 125,622 ops/sec ±0.57% (61 runs sampled)
Set#forEach x 80,656 ops/sec ±0.97% (61 runs sampled)
arr[index] x 92,271 ops/sec ±0.85% (62 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 306,648 ops/sec ±0.99% (90 runs sampled)
lodash.cloneDeep x 185,723 ops/sec ±0.52% (91 runs sampled)
lodash.clone. this is shallow clone x 1,716,456 ops/sec ±0.54% (89 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

QuickJS output:

```
JSON.parse(JSON.stringify) x 112,521 ops/sec ±1.04% (62 runs sampled)
lodash.cloneDeep x 17,437 ops/sec ±0.65% (63 runs sampled)
lodash.clone. this is shallow clone x 208,480 ops/sec ±0.52% (64 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 6,202 ops/sec ±0.67% (84 runs sampled)
bluebird.coroutine x 308 ops/sec ±1.13% (86 runs sampled)
Fastest is co.wrap

```

QuickJS output:

```
co.wrap x 288 ops/sec ±0.63% (60 runs sampled)
bluebird.coroutine x 56.88 ops/sec ±0.84% (56 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 16,936 ops/sec ±0.41% (92 runs sampled)
normal for loop. cache arr.length x 16,804 ops/sec ±0.72% (92 runs sampled)
native forEach x 554 ops/sec ±0.66% (88 runs sampled)
lodash.forEach x 566 ops/sec ±0.78% (88 runs sampled)
Fastest is normal for loop. i < arr.length,normal for loop. cache arr.length

```

QuickJS output:

```
normal for loop. i < arr.length x 270 ops/sec ±0.78% (54 runs sampled)
normal for loop. cache arr.length x 384 ops/sec ±0.91% (63 runs sampled)
native forEach x 185 ops/sec ±1.42% (57 runs sampled)
lodash.forEach x 134 ops/sec ±1.14% (57 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 622,596,179 ops/sec ±0.52% (89 runs sampled)
withHiddenClass x 624,807,344 ops/sec ±0.54% (90 runs sampled)
Fastest is withHiddenClass,withoutHiddenClass

```

QuickJS output:

```
withoutHiddenClass x 1,355,387 ops/sec ±0.76% (62 runs sampled)
withHiddenClass x 1,238,280 ops/sec ±0.67% (64 runs sampled)
Fastest is withoutHiddenClass

```

[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 659,304,376 ops/sec ±0.66% (88 runs sampled)
outter x 658,894,963 ops/sec ±0.58% (89 runs sampled)
Fastest is outter,inner

```

QuickJS output:

```
inner x 2,019,792 ops/sec ±0.54% (64 runs sampled)
outter x 6,773,744 ops/sec ±0.65% (62 runs sampled)
Fastest is outter

```

[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 74,878,626 ops/sec ±1.38% (89 runs sampled)
lodash.isEmpty(obj) x 13,207,464 ops/sec ±0.89% (90 runs sampled)
JSON.stringify(obj) == {} x 5,050,334 ops/sec ±0.73% (93 runs sampled)
Array.length === 0 x 656,319,605 ops/sec ±0.90% (85 runs sampled)
lodash.isEmpty(arr) x 14,527,578 ops/sec ±0.54% (84 runs sampled)
Fastest is Array.length === 0

```

QuickJS output:

```
Object.keys().length === 0 x 3,211,526 ops/sec ±1.08% (62 runs sampled)
lodash.isEmpty(obj) x 700,058 ops/sec ±1.34% (62 runs sampled)
JSON.stringify(obj) == {} x 973,548 ops/sec ±1.24% (63 runs sampled)
Array.length === 0 x 10,855,323 ops/sec ±0.56% (63 runs sampled)
lodash.isEmpty(arr) x 789,412 ops/sec ±0.53% (55 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 64,246,702 ops/sec ±0.82% (89 runs sampled)
Object.keys x 8,307,678 ops/sec ±1.07% (90 runs sampled)
lodash.forEach x 4,148,822 ops/sec ±0.61% (90 runs sampled)
Fastest is for .. in ..

```

QuickJS output:

```
for .. in .. x 591,654 ops/sec ±0.99% (43 runs sampled)
Object.keys x 418,946 ops/sec ±0.58% (58 runs sampled)
lodash.forEach x 217,095 ops/sec ±0.79% (64 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 438 ops/sec ±0.93% (83 runs sampled)
normal loop. use index x 435 ops/sec ±0.83% (85 runs sampled)
new Array(arr.length) x 1,290 ops/sec ±0.69% (87 runs sampled)
native map x 390 ops/sec ±0.77% (87 runs sampled)
lodash.forEach x 407 ops/sec ±0.66% (86 runs sampled)
Fastest is new Array(arr.length)

```

QuickJS output:

```
normal loop. use push x 75.67 ops/sec ±0.64% (55 runs sampled)
normal loop. use index x 103 ops/sec ±0.85% (53 runs sampled)
new Array(arr.length) x 104 ops/sec ±0.52% (54 runs sampled)
native map x 76.43 ops/sec ±1.25% (56 runs sampled)
lodash.forEach x 81.11 ops/sec ±0.55% (52 runs sampled)
Fastest is new Array(arr.length),normal loop. use index

```

[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 661,529,824 ops/sec ±0.35% (92 runs sampled)
[] x 658,537,284 ops/sec ±0.55% (92 runs sampled)
[] and assign x 44.00 ops/sec ±2.47% (58 runs sampled)
new Array(length) and assign x 264 ops/sec ±1.54% (81 runs sampled)
Fastest is new Array(),[]

```

QuickJS output:

```
new Array() x 2,948,801 ops/sec ±0.70% (62 runs sampled)
[] x 5,729,799 ops/sec ±0.61% (51 runs sampled)
[] and assign x 28.92 ops/sec ±1.04% (39 runs sampled)
new Array(length) and assign x 29.75 ops/sec ±1.35% (40 runs sampled)
Fastest is []

```

[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 7,015,126 ops/sec ±1.51% (80 runs sampled)
bluebird `new promise` x 2,329,985 ops/sec ±1.28% (83 runs sampled)
native promise.resolve x 8,319,778 ops/sec ±0.81% (85 runs sampled)
bluebird promise.resolve x 2,469,620 ops/sec ±1.04% (82 runs sampled)
co x 380,570 ops/sec ±1.34% (82 runs sampled)
Fastest is native promise.resolve

```

QuickJS output:

```
native `new promise` x 257,960 ops/sec ±0.64% (59 runs sampled)
bluebird `new promise` x 70,969 ops/sec ±1.28% (60 runs sampled)
native promise.resolve x 262,864 ops/sec ±1.23% (60 runs sampled)
bluebird promise.resolve x 85,360 ops/sec ±1.08% (57 runs sampled)
co x 85,406 ops/sec ±1.68% (56 runs sampled)
Fastest is native promise.resolve

```

[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 260 ops/sec ±0.62% (85 runs sampled)
string index `1` x 259 ops/sec ±0.98% (85 runs sampled)
dot index `b` x 254 ops/sec ±1.42% (84 runs sampled)
string index `b` x 261 ops/sec ±0.89% (86 runs sampled)
Fastest is string index `b`,string index `1`

```

QuickJS output:

```
number index `1` x 3.16 ops/sec ±1.25% (12 runs sampled)
string index `1` x 2.40 ops/sec ±1.73% (10 runs sampled)
dot index `b` x 3.89 ops/sec ±0.78% (14 runs sampled)
string index `b` x 1.97 ops/sec ±1.82% (9 runs sampled)
Fastest is dot index `b`

```

[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 71,284,067 ops/sec ±1.01% (87 runs sampled)
lodash.random x 46,310,597 ops/sec ±0.76% (90 runs sampled)
Fastest is Math.random % range

```

QuickJS output:

```
Math.random % range x 5,463,197 ops/sec ±0.68% (49 runs sampled)
lodash.random x 1,364,640 ops/sec ±0.61% (65 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 15,980,543 ops/sec ±0.83% (89 runs sampled)
Regex.exec x 16,919,238 ops/sec ±1.36% (86 runs sampled)
String.search x 25,305,680 ops/sec ±0.84% (87 runs sampled)
test x 31,473,143 ops/sec ±0.95% (91 runs sampled)
Fastest is test

```

QuickJS output:

```
String.match x 765,009 ops/sec ±0.58% (54 runs sampled)
Regex.exec x 952,995 ops/sec ±0.78% (63 runs sampled)
String.search x 765,157 ops/sec ±0.53% (54 runs sampled)
test x 864,737 ops/sec ±0.54% (60 runs sampled)
Fastest is Regex.exec

```

[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 61,061,531 ops/sec ±0.66% (86 runs sampled)
lodash.sample x 59,687,842 ops/sec ±0.96% (88 runs sampled)
Fastest is Math.random % arr.length

```

QuickJS output:

```
Math.random % arr.length x 4,653,517 ops/sec ±0.87% (42 runs sampled)
lodash.sample x 2,492,276 ops/sec ±0.51% (64 runs sampled)
Fastest is Math.random % arr.length

```

[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 27,752,764 ops/sec ±0.75% (90 runs sampled)
indexOf === 0 x 665,531,845 ops/sec ±0.65% (87 runs sampled)
lodash.startsWith x 669,069,121 ops/sec ±0.69% (86 runs sampled)
Fastest is lodash.startsWith,indexOf === 0

```

QuickJS output:

```
regex /^ab/ x 726,967 ops/sec ±0.66% (52 runs sampled)
indexOf === 0 x 6,202,871 ops/sec ±0.72% (62 runs sampled)
lodash.startsWith x 1,585,756 ops/sec ±0.44% (64 runs sampled)
Fastest is indexOf === 0

```

[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 658,439,513 ops/sec ±0.65% (87 runs sampled)
+= x 656,954,577 ops/sec ±0.62% (91 runs sampled)
arr.join("") x 2,942,947 ops/sec ±1.23% (85 runs sampled)
str.concat x 659,072,682 ops/sec ±0.56% (91 runs sampled)
Fastest is str.concat,+,+=

```

QuickJS output:

```
+ x 4,521,023 ops/sec ±1.97% (60 runs sampled)
+= x 3,491,575 ops/sec ±1.19% (64 runs sampled)
arr.join("") x 1,140,611 ops/sec ±1.38% (58 runs sampled)
str.concat x 3,889,089 ops/sec ±1.22% (61 runs sampled)
Fastest is +

```

[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 659,852,234 ops/sec ±0.68% (91 runs sampled)
~~str x 661,609,565 ops/sec ±0.52% (88 runs sampled)
Number(str) x 658,654,127 ops/sec ±0.86% (92 runs sampled)
parseInt(str) x 166,337,847 ops/sec ±0.62% (89 runs sampled)
parseInt(str, 10) x 156,455,401 ops/sec ±0.57% (90 runs sampled)
str - 0 x 656,150,496 ops/sec ±0.56% (93 runs sampled)
Fastest is ~~str,+str,Number(str)

```

QuickJS output:

```
+str x 6,414,021 ops/sec ±0.36% (64 runs sampled)
~~str x 6,066,165 ops/sec ±0.53% (53 runs sampled)
Number(str) x 4,898,756 ops/sec ±0.54% (64 runs sampled)
parseInt(str) x 5,095,454 ops/sec ±0.69% (62 runs sampled)
parseInt(str, 10) x 5,230,256 ops/sec ±0.50% (47 runs sampled)
str - 0 x 5,862,382 ops/sec ±0.63% (52 runs sampled)
Fastest is +str

```

[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 38,365 ops/sec ±0.67% (93 runs sampled)
JSON.parse without try catch x 38,806 ops/sec ±0.53% (92 runs sampled)
for loop with try catch x 456 ops/sec ±0.88% (81 runs sampled)
for loop without try catch x 450 ops/sec ±1.18% (82 runs sampled)
Fastest is JSON.parse without try catch

```

QuickJS output:

```
JSON.parse with try catch x 9,528 ops/sec ±0.61% (51 runs sampled)
JSON.parse without try catch x 9,450 ops/sec ±0.74% (50 runs sampled)
for loop with try catch x 304 ops/sec ±1.03% (61 runs sampled)
for loop without try catch x 299 ops/sec ±0.62% (60 runs sampled)
Fastest is JSON.parse with try catch,JSON.parse without try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 29,670 ops/sec ±1.00% (87 runs sampled)
lodash.uniq x 26,059 ops/sec ±0.70% (91 runs sampled)
Set x 28,078 ops/sec ±0.32% (93 runs sampled)
Fastest is obj[key] = true

```

QuickJS output:

```
obj[key] = true x 9,565 ops/sec ±1.01% (51 runs sampled)
lodash.uniq x 4,574 ops/sec ±20.36% (27 runs sampled)
Set x 6,246 ops/sec ±13.66% (36 runs sampled)
Fastest is obj[key] = true

```

[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 1,062,700 ops/sec ±1.03% (88 runs sampled)
str.replace x 5,638,393 ops/sec ±0.86% (91 runs sampled)
custom fn x 657,335,405 ops/sec ±0.74% (91 runs sampled)
Fastest is custom fn

```

QuickJS output:

```
util.format x 127,657 ops/sec ±0.51% (62 runs sampled)
str.replace x 1,420,751 ops/sec ±0.61% (62 runs sampled)
custom fn x 3,846,077 ops/sec ±0.90% (63 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 307 ops/sec ±0.95% (84 runs sampled)
yield* x 149 ops/sec ±1.40% (75 runs sampled)
closure x 3,272 ops/sec ±0.39% (90 runs sampled)
Fastest is closure

```

QuickJS output:

```
yield x 26.64 ops/sec ±0.63% (36 runs sampled)
yield* x 20.09 ops/sec ±0.63% (37 runs sampled)
closure x 151 ops/sec ±0.74% (59 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)