# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 14.16.0
* v8: 8.4.371.19-node.18

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
[].slice.apply x 17,648,609 ops/sec ±0.98% (85 runs sampled)
[].slice.call x 17,065,027 ops/sec ±0.93% (92 runs sampled)
Array.prototype.slice.apply x 17,160,253 ops/sec ±0.81% (90 runs sampled)
Array.prototype.slice.call x 17,416,078 ops/sec ±0.67% (92 runs sampled)
lodash.toArray x 8,724,968 ops/sec ±0.73% (91 runs sampled)
Fastest is [].slice.apply

```

[array_from_set.js](benchmark/array_from_set.js)

```
Array.from x 2,564,257 ops/sec ±1.24% (86 runs sampled)
Set#forEach x 381,407 ops/sec ±0.79% (89 runs sampled)
arr[index] x 431,464 ops/sec ±0.66% (91 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)

```
JSON.parse(JSON.stringify) x 291,935 ops/sec ±1.08% (89 runs sampled)
lodash.cloneDeep x 171,698 ops/sec ±0.81% (91 runs sampled)
lodash.clone. this is shallow clone x 1,554,027 ops/sec ±0.94% (91 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co.wrap x 5,897 ops/sec ±1.38% (81 runs sampled)
bluebird.coroutine x 272 ops/sec ±14.58% (84 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)

```
normal for loop. i < arr.length x 15,750 ops/sec ±0.67% (86 runs sampled)
normal for loop. cache arr.length x 16,134 ops/sec ±0.75% (89 runs sampled)
native forEach x 572 ops/sec ±0.55% (88 runs sampled)
lodash.forEach x 572 ops/sec ±0.83% (88 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)

```
<Test #1> x 246 ops/sec ±0.72% (81 runs sampled)
withoutHiddenClass x 580,406,476 ops/sec ±0.58% (91 runs sampled)
withHiddenClass x 579,998,775 ops/sec ±0.84% (88 runs sampled)
Fastest is withoutHiddenClass,withHiddenClass

```

[inner_function.js](benchmark/inner_function.js)

```
inner x 708,121,748 ops/sec ±0.58% (90 runs sampled)
outter x 711,030,679 ops/sec ±0.83% (88 runs sampled)
Fastest is outter,inner

```

[is_object_empty.js](benchmark/is_object_empty.js)

```
Object.keys().length === 0 x 74,025,770 ops/sec ±0.92% (87 runs sampled)
lodash.isEmpty(obj) x 12,569,145 ops/sec ±0.60% (90 runs sampled)
JSON.stringify(obj) == {} x 4,838,169 ops/sec ±0.76% (90 runs sampled)
Array.length === 0 x 719,056,270 ops/sec ±0.52% (91 runs sampled)
lodash.isEmpty(arr) x 13,801,432 ops/sec ±0.51% (91 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)

```
for .. in .. x 61,236,226 ops/sec ±0.61% (89 runs sampled)
Object.keys x 7,865,302 ops/sec ±0.67% (87 runs sampled)
lodash.forEach x 3,901,585 ops/sec ±0.74% (90 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)

```
normal loop. use push x 406 ops/sec ±1.06% (83 runs sampled)
normal loop. use index x 409 ops/sec ±0.70% (87 runs sampled)
new Array(arr.length) x 1,199 ops/sec ±0.84% (87 runs sampled)
native map x 367 ops/sec ±0.72% (85 runs sampled)
lodash.forEach x 383 ops/sec ±0.72% (86 runs sampled)
Fastest is new Array(arr.length)

```

[new_array.js](benchmark/new_array.js)

```
new Array() x 702,550,462 ops/sec ±0.97% (88 runs sampled)
[] x 716,339,423 ops/sec ±0.49% (90 runs sampled)
[] and assign x 41.56 ops/sec ±2.40% (55 runs sampled)
new Array(length) and assign x 230 ops/sec ±1.79% (77 runs sampled)
Fastest is []

```

[new_promise.js](benchmark/new_promise.js)

```
v8 native `new promise` x 6,539,099 ops/sec ±1.21% (80 runs sampled)
bluebird `new promise` x 2,252,017 ops/sec ±1.33% (81 runs sampled)
v8 native promise.resolve x 7,824,083 ops/sec ±1.12% (81 runs sampled)
bluebird promise.resolve x 2,332,221 ops/sec ±1.11% (83 runs sampled)
co x 366,668 ops/sec ±1.66% (78 runs sampled)
Fastest is v8 native promise.resolve

```

[obj_index.js](benchmark/obj_index.js)

```
number index `1` x 247 ops/sec ±0.77% (81 runs sampled)
string index `1` x 246 ops/sec ±0.64% (86 runs sampled)
dot index `b` x 246 ops/sec ±0.55% (86 runs sampled)
string index `b` x 244 ops/sec ±0.62% (85 runs sampled)
Fastest is number index `1`,string index `1`

```

[random_int.js](benchmark/random_int.js)

```
Math.random % range x 65,523,583 ops/sec ±2.25% (86 runs sampled)
lodash.random x 43,732,608 ops/sec ±0.76% (91 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)

```
String.match x 14,907,807 ops/sec ±0.92% (88 runs sampled)
Regex.exec x 14,892,067 ops/sec ±1.22% (87 runs sampled)
String.search x 22,481,855 ops/sec ±0.71% (87 runs sampled)
test x 28,971,353 ops/sec ±0.95% (91 runs sampled)
Fastest is test

```

[sample_from_array.js](benchmark/sample_from_array.js)

```
Math.random % arr.length x 58,305,794 ops/sec ±0.89% (85 runs sampled)
lodash.sample x 56,643,932 ops/sec ±0.47% (93 runs sampled)
Fastest is Math.random % arr.length

```

[start_with.js](benchmark/start_with.js)

```
regex /^ab/ x 25,980,348 ops/sec ±0.77% (88 runs sampled)
indexOf === 0 x 706,997,248 ops/sec ±0.59% (93 runs sampled)
lodash.startsWith x 698,029,270 ops/sec ±0.67% (85 runs sampled)
Fastest is indexOf === 0

```

[str_concat.js](benchmark/str_concat.js)

```
+ x 706,699,758 ops/sec ±0.59% (89 runs sampled)
+= x 707,451,929 ops/sec ±0.69% (90 runs sampled)
arr.join("") x 2,813,028 ops/sec ±3.30% (71 runs sampled)
str.concat x 703,657,835 ops/sec ±0.99% (87 runs sampled)
Fastest is +=,+,str.concat

```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
+str x 697,294,683 ops/sec ±0.72% (90 runs sampled)
~~str x 699,581,986 ops/sec ±0.85% (91 runs sampled)
Number(str) x 702,892,142 ops/sec ±0.73% (89 runs sampled)
parseInt(str) x 155,572,359 ops/sec ±0.77% (86 runs sampled)
parseInt(str, 10) x 146,400,586 ops/sec ±1.02% (91 runs sampled)
str - 0 x 705,197,937 ops/sec ±0.65% (89 runs sampled)
Fastest is str - 0,Number(str),~~str

```

[try_catch.js](benchmark/try_catch.js)

```
JSON.parse with try catch x 36,718 ops/sec ±0.72% (90 runs sampled)
JSON.parse without try catch x 37,274 ops/sec ±0.74% (91 runs sampled)
for loop with try catch x 420 ops/sec ±1.25% (80 runs sampled)
for loop without try catch x 419 ops/sec ±1.05% (83 runs sampled)
Fastest is JSON.parse without try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
obj[key] = true x 27,779 ops/sec ±0.96% (85 runs sampled)
lodash.uniq x 27,573 ops/sec ±0.69% (88 runs sampled)
Set x 29,097 ops/sec ±0.69% (87 runs sampled)
Fastest is Set

```

[util.format.js](benchmark/util.format.js)

```
util.format x 1,039,107 ops/sec ±0.73% (90 runs sampled)
str.replace x 5,264,532 ops/sec ±0.76% (91 runs sampled)
custom fn x 711,152,971 ops/sec ±0.52% (88 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield x 285 ops/sec ±1.00% (83 runs sampled)
yield* x 141 ops/sec ±1.47% (71 runs sampled)
closure x 3,073 ops/sec ±0.49% (87 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`