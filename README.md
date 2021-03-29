# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 14.16.0
* v8: 8.4.371.19-node.18

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
[].slice.apply x 20,142,322 ops/sec ±1.01% (88 runs sampled)
[].slice.call x 20,427,087 ops/sec ±0.73% (89 runs sampled)
Array.prototype.slice.apply x 19,873,227 ops/sec ±1.89% (87 runs sampled)
Array.prototype.slice.call x 19,630,219 ops/sec ±1.05% (90 runs sampled)
lodash.toArray x 9,552,014 ops/sec ±1.13% (88 runs sampled)
Fastest is [].slice.call,[].slice.apply,Array.prototype.slice.apply

```

[array_from_set.js](benchmark/array_from_set.js)

```
Array.from x 2,974,008 ops/sec ±1.11% (86 runs sampled)
Set#forEach x 444,717 ops/sec ±1.20% (87 runs sampled)
arr[index] x 489,873 ops/sec ±0.77% (86 runs sampled)
Fastest is Array.from

```

[clone_object.js](benchmark/clone_object.js)

```
JSON.parse(JSON.stringify) x 326,818 ops/sec ±1.12% (88 runs sampled)
lodash.cloneDeep x 191,337 ops/sec ±1.26% (87 runs sampled)
lodash.clone. this is shallow clone x 1,730,397 ops/sec ±2.06% (86 runs sampled)
Fastest is lodash.clone. this is shallow clone

```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co.wrap x 6,168 ops/sec ±1.66% (79 runs sampled)
bluebird.coroutine x 285 ops/sec ±1.20% (82 runs sampled)
Fastest is co.wrap

```

[for_loop.js](benchmark/for_loop.js)

```
normal for loop. i < arr.length x 15,865 ops/sec ±0.73% (90 runs sampled)
normal for loop. cache arr.length x 16,222 ops/sec ±1.24% (87 runs sampled)
native forEach x 586 ops/sec ±0.91% (87 runs sampled)
lodash.forEach x 616 ops/sec ±0.86% (85 runs sampled)
Fastest is normal for loop. cache arr.length

```

[hidden_class.js](benchmark/hidden_class.js)

```
<Test #1> x 269 ops/sec ±1.09% (84 runs sampled)
withoutHiddenClass x 652,841,942 ops/sec ±0.88% (90 runs sampled)
withHiddenClass x 656,456,033 ops/sec ±0.75% (89 runs sampled)
Fastest is withHiddenClass,withoutHiddenClass

```

[inner_function.js](benchmark/inner_function.js)

```
inner x 794,220,773 ops/sec ±0.89% (87 runs sampled)
outter x 795,548,622 ops/sec ±0.74% (89 runs sampled)
Fastest is outter,inner

```

[is_object_empty.js](benchmark/is_object_empty.js)

```
Object.keys().length === 0 x 77,454,117 ops/sec ±1.13% (84 runs sampled)
lodash.isEmpty(obj) x 12,586,813 ops/sec ±0.78% (91 runs sampled)
JSON.stringify(obj) == {} x 4,802,329 ops/sec ±0.89% (91 runs sampled)
Array.length === 0 x 736,247,625 ops/sec ±0.97% (87 runs sampled)
lodash.isEmpty(arr) x 15,532,486 ops/sec ±0.74% (89 runs sampled)
Fastest is Array.length === 0

```

[iterate_object.js](benchmark/iterate_object.js)

```
for .. in .. x 68,426,626 ops/sec ±0.89% (89 runs sampled)
Object.keys x 8,752,891 ops/sec ±1.71% (87 runs sampled)
lodash.forEach x 4,297,370 ops/sec ±1.03% (84 runs sampled)
Fastest is for .. in ..

```

[map_loop.js](benchmark/map_loop.js)

```
normal loop. use push x 486 ops/sec ±1.80% (78 runs sampled)
normal loop. use index x 530 ops/sec ±1.24% (86 runs sampled)
new Array(arr.length) x 1,558 ops/sec ±1.13% (86 runs sampled)
native map x 416 ops/sec ±1.04% (82 runs sampled)
lodash.forEach x 435 ops/sec ±1.12% (84 runs sampled)
Fastest is new Array(arr.length)

```

[new_array.js](benchmark/new_array.js)

```
new Array() x 807,436,346 ops/sec ±0.56% (89 runs sampled)
[] x 801,862,228 ops/sec ±0.92% (87 runs sampled)
[] and assign x 46.53 ops/sec ±2.29% (61 runs sampled)
new Array(length) and assign x 291 ops/sec ±2.58% (80 runs sampled)
Fastest is new Array(),[]

```

[new_promise.js](benchmark/new_promise.js)

```
v8 native `new promise` x 7,356,874 ops/sec ±0.89% (82 runs sampled)
bluebird `new promise` x 2,636,231 ops/sec ±0.74% (84 runs sampled)
v8 native promise.resolve x 8,803,858 ops/sec ±1.34% (81 runs sampled)
bluebird promise.resolve x 2,612,631 ops/sec ±0.92% (81 runs sampled)
co x 381,194 ops/sec ±1.64% (77 runs sampled)
Fastest is v8 native promise.resolve

```

[obj_index.js](benchmark/obj_index.js)

```
number index `1` x 273 ops/sec ±0.76% (84 runs sampled)
string index `1` x 273 ops/sec ±0.82% (84 runs sampled)
dot index `b` x 272 ops/sec ±0.98% (84 runs sampled)
string index `b` x 270 ops/sec ±1.33% (84 runs sampled)
Fastest is number index `1`,string index `1`,dot index `b`,string index `b`

```

[random_int.js](benchmark/random_int.js)

```
Math.random % range x 78,574,904 ops/sec ±0.93% (89 runs sampled)
lodash.random x 50,645,818 ops/sec ±0.90% (88 runs sampled)
Fastest is Math.random % range

```

[regex_method.js](benchmark/regex_method.js)

```
String.match x 17,323,983 ops/sec ±1.39% (88 runs sampled)
Regex.exec x 18,695,807 ops/sec ±0.85% (88 runs sampled)
String.search x 25,459,838 ops/sec ±0.96% (90 runs sampled)
test x 32,739,044 ops/sec ±1.31% (89 runs sampled)
Fastest is test

```

[sample_from_array.js](benchmark/sample_from_array.js)

```
Math.random % arr.length x 65,135,722 ops/sec ±2.67% (84 runs sampled)
lodash.sample x 63,385,513 ops/sec ±2.01% (86 runs sampled)
Fastest is Math.random % arr.length

```

[start_with.js](benchmark/start_with.js)

```
regex /^ab/ x 29,789,469 ops/sec ±0.87% (88 runs sampled)
indexOf === 0 x 800,896,323 ops/sec ±0.78% (91 runs sampled)
lodash.startsWith x 786,356,241 ops/sec ±1.41% (89 runs sampled)
Fastest is indexOf === 0,lodash.startsWith

```

[str_concat.js](benchmark/str_concat.js)

```
+ x 805,714,095 ops/sec ±0.73% (88 runs sampled)
+= x 806,307,860 ops/sec ±0.61% (88 runs sampled)
arr.join("") x 4,628,034 ops/sec ±1.08% (87 runs sampled)
str.concat x 756,812,944 ops/sec ±0.94% (87 runs sampled)
Fastest is +=,+

```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
+str x 772,442,040 ops/sec ±1.77% (83 runs sampled)
~~str x 791,640,650 ops/sec ±1.06% (88 runs sampled)
Number(str) x 763,732,620 ops/sec ±0.85% (84 runs sampled)
parseInt(str) x 159,432,364 ops/sec ±0.75% (89 runs sampled)
parseInt(str, 10) x 146,950,408 ops/sec ±1.10% (90 runs sampled)
str - 0 x 722,608,038 ops/sec ±0.84% (87 runs sampled)
Fastest is ~~str,+str

```

[try_catch.js](benchmark/try_catch.js)

```
JSON.parse with try catch x 40,686 ops/sec ±0.69% (90 runs sampled)
JSON.parse without try catch x 39,653 ops/sec ±0.91% (90 runs sampled)
for loop with try catch x 531 ops/sec ±1.51% (82 runs sampled)
for loop without try catch x 527 ops/sec ±1.53% (82 runs sampled)
Fastest is JSON.parse with try catch

```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
obj[key] = true x 32,529 ops/sec ±1.38% (86 runs sampled)
lodash.uniq x 30,959 ops/sec ±1.34% (84 runs sampled)
Set x 32,380 ops/sec ±0.88% (86 runs sampled)
Fastest is Set,obj[key] = true

```

[util.format.js](benchmark/util.format.js)

```
util.format x 1,089,312 ops/sec ±0.99% (87 runs sampled)
str.replace x 5,634,442 ops/sec ±0.90% (88 runs sampled)
custom fn x 738,445,564 ops/sec ±0.58% (91 runs sampled)
Fastest is custom fn

```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield x 314 ops/sec ±1.01% (84 runs sampled)
yield* x 161 ops/sec ±1.46% (78 runs sampled)
closure x 3,466 ops/sec ±0.87% (88 runs sampled)
Fastest is closure

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`