# fast-js

:heart_eyes: Writing fast JavaScript on Node.js or QuickJS

Here are many benchmark results produced from Node.js or QuickJS runtime.

# env

- Node.js: 14.17.0
- v8: 8.4.371.23-node.63
- QuickJS: QuickJS version 2021-03-27

# benchmark


[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 16,788,881 ops/sec ±0.58% (91 runs sampled)
[].slice.call x 16,834,977 ops/sec ±0.56% (89 runs sampled)
Array.prototype.slice.apply x 16,870,237 ops/sec ±0.50% (90 runs sampled)
Array.prototype.slice.call x 16,909,592 ops/sec ±0.86% (91 runs sampled)
lodash.toArray x 8,697,733 ops/sec ±1.49% (88 runs sampled)
Fastest is Array.prototype.slice.apply,[].slice.call,[].slice.apply
```

QuickJS output:

```
[].slice.apply x 821,517 ops/sec ±0.51% (58 runs sampled)
[].slice.call x 834,270 ops/sec ±0.51% (58 runs sampled)
Array.prototype.slice.apply x 881,405 ops/sec ±0.75% (61 runs sampled)
Array.prototype.slice.call x 890,756 ops/sec ±0.43% (62 runs sampled)
lodash.toArray x 351,443 ops/sec ±0.40% (64 runs sampled)
Fastest is Array.prototype.slice.call
```



[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```
Array.from x 2,638,697 ops/sec ±0.65% (91 runs sampled)
Set#forEach x 422,686 ops/sec ±0.48% (92 runs sampled)
arr[index] x 443,945 ops/sec ±0.41% (93 runs sampled)
Fastest is Array.from
```

QuickJS output:

```
Array.from x 126,838 ops/sec ±0.52% (62 runs sampled)
Set#forEach x 88,473 ops/sec ±0.41% (65 runs sampled)
arr[index] x 97,560 ops/sec ±0.59% (61 runs sampled)
Fastest is Array.from
```



[clone_object.js](benchmark/clone_object.js)


Node.js output:

```
JSON.parse(JSON.stringify) x 321,031 ops/sec ±0.42% (94 runs sampled)
lodash.cloneDeep x 178,728 ops/sec ±0.40% (91 runs sampled)
lodash.clone. this is shallow clone x 1,726,754 ops/sec ±0.45% (92 runs sampled)
Fastest is lodash.clone. this is shallow clone
```

QuickJS output:

```
JSON.parse(JSON.stringify) x 113,863 ops/sec ±0.37% (65 runs sampled)
lodash.cloneDeep x 18,499 ops/sec ±0.39% (64 runs sampled)
lodash.clone. this is shallow clone x 221,044 ops/sec ±0.45% (63 runs sampled)
Fastest is lodash.clone. this is shallow clone
```



[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```
co.wrap x 6,792 ops/sec ±1.17% (85 runs sampled)
bluebird.coroutine x 69.45 ops/sec ±0.58% (82 runs sampled)
Fastest is co.wrap
```

QuickJS output:

```
co.wrap x 315 ops/sec ±0.68% (61 runs sampled)
bluebird.coroutine x 64.64 ops/sec ±0.59% (62 runs sampled)
Fastest is co.wrap
```



[for_loop.js](benchmark/for_loop.js)


Node.js output:

```
normal for loop. i < arr.length x 12,437 ops/sec ±3.08% (89 runs sampled)
normal for loop. cache arr.length x 13,064 ops/sec ±0.35% (92 runs sampled)
native forEach x 520 ops/sec ±0.36% (90 runs sampled)
lodash.forEach x 555 ops/sec ±0.40% (90 runs sampled)
Fastest is normal for loop. cache arr.length,normal for loop. i < arr.length
```

QuickJS output:

```
normal for loop. i < arr.length x 292 ops/sec ±0.55% (58 runs sampled)
normal for loop. cache arr.length x 393 ops/sec ±0.54% (61 runs sampled)
native forEach x 181 ops/sec ±0.34% (58 runs sampled)
lodash.forEach x 140 ops/sec ±0.53% (56 runs sampled)
Fastest is normal for loop. cache arr.length
```



[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```
withoutHiddenClass x 610,268,331 ops/sec ±0.40% (90 runs sampled)
withHiddenClass x 608,318,236 ops/sec ±0.35% (88 runs sampled)
Fastest is withoutHiddenClass,withHiddenClass
```

QuickJS output:

```
withoutHiddenClass x 1,298,766 ops/sec ±0.63% (62 runs sampled)
withHiddenClass x 1,203,862 ops/sec ±0.69% (61 runs sampled)
Fastest is withoutHiddenClass
```



[inner_function.js](benchmark/inner_function.js)


Node.js output:

```
inner x 598,912,156 ops/sec ±1.05% (92 runs sampled)
outter x 599,937,827 ops/sec ±0.33% (95 runs sampled)
Fastest is outter,inner
```

QuickJS output:

```
inner x 1,895,921 ops/sec ±0.53% (62 runs sampled)
outter x 5,331,412 ops/sec ±0.70% (48 runs sampled)
Fastest is outter
```



[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```
Object.keys().length === 0 x 74,633,152 ops/sec ±1.05% (88 runs sampled)
lodash.isEmpty(obj) x 12,605,480 ops/sec ±1.84% (88 runs sampled)
JSON.stringify(obj) == {} x 5,479,576 ops/sec ±0.49% (92 runs sampled)
Array.length === 0 x 616,795,159 ops/sec ±0.43% (91 runs sampled)
lodash.isEmpty(arr) x 13,685,717 ops/sec ±0.52% (91 runs sampled)
Fastest is Array.length === 0
```

QuickJS output:

```
Object.keys().length === 0 x 3,024,074 ops/sec ±0.48% (65 runs sampled)
lodash.isEmpty(obj) x 754,726 ops/sec ±0.40% (63 runs sampled)
JSON.stringify(obj) == {} x 977,275 ops/sec ±0.49% (64 runs sampled)
Array.length === 0 x 7,688,307 ops/sec ±0.42% (63 runs sampled)
lodash.isEmpty(arr) x 770,376 ops/sec ±0.55% (54 runs sampled)
Fastest is Array.length === 0
```



[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```
for .. in .. x 66,741,661 ops/sec ±0.74% (87 runs sampled)
Object.keys x 8,236,699 ops/sec ±0.54% (92 runs sampled)
lodash.forEach x 3,888,019 ops/sec ±0.46% (93 runs sampled)
Fastest is for .. in ..
```

QuickJS output:

```
for .. in .. x 621,192 ops/sec ±0.58% (62 runs sampled)
Object.keys x 454,345 ops/sec ±0.53% (63 runs sampled)
lodash.forEach x 234,338 ops/sec ±0.53% (63 runs sampled)
Fastest is for .. in ..
```



[map_loop.js](benchmark/map_loop.js)


Node.js output:

```
normal loop. use push x 495 ops/sec ±0.74% (89 runs sampled)
normal loop. use index x 497 ops/sec ±0.57% (86 runs sampled)
new Array(arr.length) x 1,398 ops/sec ±0.61% (88 runs sampled)
native map x 367 ops/sec ±0.53% (88 runs sampled)
lodash.forEach x 391 ops/sec ±0.65% (86 runs sampled)
Fastest is new Array(arr.length)
```

QuickJS output:

```
normal loop. use push x 81.15 ops/sec ±0.54% (53 runs sampled)
normal loop. use index x 110 ops/sec ±0.52% (57 runs sampled)
new Array(arr.length) x 113 ops/sec ±0.45% (58 runs sampled)
native map x 84.73 ops/sec ±0.46% (55 runs sampled)
lodash.forEach x 91.26 ops/sec ±0.50% (53 runs sampled)
Fastest is new Array(arr.length)
```



[new_array.js](benchmark/new_array.js)


Node.js output:

```
new Array() x 610,680,586 ops/sec ±0.60% (88 runs sampled)
[] x 621,008,593 ops/sec ±0.52% (91 runs sampled)
[] and assign x 43.95 ops/sec ±1.97% (57 runs sampled)
new Array(length) and assign x 293 ops/sec ±1.07% (82 runs sampled)
Fastest is []
```

QuickJS output:

```
new Array() x 2,805,497 ops/sec ±0.40% (50 runs sampled)
[] x 4,750,236 ops/sec ±0.43% (65 runs sampled)
[] and assign x 30.39 ops/sec ±0.65% (41 runs sampled)
new Array(length) and assign x 31.19 ops/sec ±0.61% (42 runs sampled)
Fastest is []
```



[new_promise.js](benchmark/new_promise.js)


Node.js output:

```
native `new promise` x 6,770,160 ops/sec ±1.20% (82 runs sampled)
bluebird `new promise` x 5,692 ops/sec ±0.66% (84 runs sampled)
native promise.resolve x 8,559,115 ops/sec ±1.32% (85 runs sampled)
bluebird promise.resolve x 5,731 ops/sec ±0.65% (85 runs sampled)
co x 428,815 ops/sec ±0.75% (82 runs sampled)
Fastest is native promise.resolve
```

QuickJS output:

```
native `new promise` x 271,495 ops/sec ±0.59% (55 runs sampled)
bluebird `new promise` x 75,859 ops/sec ±0.39% (61 runs sampled)
native promise.resolve x 276,624 ops/sec ±0.54% (59 runs sampled)
bluebird promise.resolve x 93,006 ops/sec ±0.66% (61 runs sampled)
co x 96,968 ops/sec ±0.72% (57 runs sampled)
Fastest is native promise.resolve
```



[obj_index.js](benchmark/obj_index.js)


Node.js output:

```
number index `1` x 262 ops/sec ±0.42% (88 runs sampled)
string index `1` x 262 ops/sec ±0.33% (88 runs sampled)
dot index `b` x 262 ops/sec ±0.50% (84 runs sampled)
string index `b` x 255 ops/sec ±0.54% (86 runs sampled)
Fastest is string index `1`,number index `1`,dot index `b`
```

QuickJS output:

```
number index `1` x 2.89 ops/sec ±1.93% (12 runs sampled)
string index `1` x 2.37 ops/sec ±0.80% (10 runs sampled)
dot index `b` x 3.82 ops/sec ±0.93% (14 runs sampled)
string index `b` x 2.09 ops/sec ±1.19% (10 runs sampled)
Fastest is dot index `b`
```



[random_int.js](benchmark/random_int.js)


Node.js output:

```
Math.random % range x 76,278,372 ops/sec ±0.63% (94 runs sampled)
lodash.random x 41,188,417 ops/sec ±0.72% (89 runs sampled)
Fastest is Math.random % range
```

QuickJS output:

```
Math.random % range x 4,433,595 ops/sec ±0.54% (64 runs sampled)
lodash.random x 1,327,526 ops/sec ±0.54% (63 runs sampled)
Fastest is Math.random % range
```



[regex_method.js](benchmark/regex_method.js)


Node.js output:

```
String.match x 16,325,883 ops/sec ±0.58% (93 runs sampled)
Regex.exec x 17,262,517 ops/sec ±0.37% (91 runs sampled)
String.search x 23,353,179 ops/sec ±0.47% (90 runs sampled)
test x 29,868,350 ops/sec ±0.95% (92 runs sampled)
Fastest is test
```

QuickJS output:

```
String.match x 832,712 ops/sec ±0.49% (63 runs sampled)
Regex.exec x 948,045 ops/sec ±0.49% (63 runs sampled)
String.search x 831,067 ops/sec ±0.52% (62 runs sampled)
test x 895,678 ops/sec ±0.48% (62 runs sampled)
Fastest is Regex.exec
```



[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```
Math.random % arr.length x 60,112,370 ops/sec ±0.52% (91 runs sampled)
lodash.sample x 61,552,064 ops/sec ±0.53% (90 runs sampled)
Fastest is lodash.sample
```

QuickJS output:

```
Math.random % arr.length x 4,145,804 ops/sec ±0.48% (63 runs sampled)
lodash.sample x 2,338,676 ops/sec ±0.70% (62 runs sampled)
Fastest is Math.random % arr.length
```



[start_with.js](benchmark/start_with.js)


Node.js output:

```
regex /^ab/ x 27,592,769 ops/sec ±0.56% (89 runs sampled)
indexOf === 0 x 608,971,349 ops/sec ±0.37% (91 runs sampled)
lodash.startsWith x 609,694,968 ops/sec ±0.39% (94 runs sampled)
Fastest is lodash.startsWith,indexOf === 0
```

QuickJS output:

```
regex /^ab/ x 758,289 ops/sec ±0.42% (65 runs sampled)
indexOf === 0 x 4,882,119 ops/sec ±0.52% (62 runs sampled)
lodash.startsWith x 1,545,700 ops/sec ±0.50% (64 runs sampled)
Fastest is indexOf === 0
```



[str_concat.js](benchmark/str_concat.js)


Node.js output:

```
+ x 611,333,421 ops/sec ±0.53% (93 runs sampled)
+= x 607,524,064 ops/sec ±0.36% (94 runs sampled)
arr.join('') x 4,693,181 ops/sec ±0.68% (90 runs sampled)
str.concat x 611,902,333 ops/sec ±0.46% (91 runs sampled)
Fastest is str.concat,+
```

QuickJS output:

```
+ x 3,860,632 ops/sec ±1.19% (58 runs sampled)
+= x 3,237,179 ops/sec ±0.74% (62 runs sampled)
arr.join('') x 1,158,129 ops/sec ±1.03% (58 runs sampled)
str.concat x 3,385,636 ops/sec ±0.99% (60 runs sampled)
Fastest is +
```



[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```
+str x 618,405,718 ops/sec ±0.52% (91 runs sampled)
~~str x 614,803,736 ops/sec ±0.46% (88 runs sampled)
Number(str) x 620,585,401 ops/sec ±0.45% (91 runs sampled)
parseInt(str) x 160,197,044 ops/sec ±0.81% (87 runs sampled)
parseInt(str, 10) x 152,176,100 ops/sec ±0.74% (86 runs sampled)
str - 0 x 617,058,509 ops/sec ±0.47% (93 runs sampled)
Fastest is Number(str),+str,str - 0
```

QuickJS output:

```
+str x 5,272,441 ops/sec ±0.41% (48 runs sampled)
~~str x 5,149,967 ops/sec ±0.42% (64 runs sampled)
Number(str) x 4,207,331 ops/sec ±0.44% (62 runs sampled)
parseInt(str) x 4,367,205 ops/sec ±0.55% (63 runs sampled)
parseInt(str, 10) x 4,365,917 ops/sec ±0.66% (64 runs sampled)
str - 0 x 4,892,563 ops/sec ±0.46% (62 runs sampled)
Fastest is +str
```



[try_catch.js](benchmark/try_catch.js)


Node.js output:

```
JSON.parse with try catch x 43,217 ops/sec ±0.51% (90 runs sampled)
JSON.parse without try catch x 42,790 ops/sec ±0.61% (91 runs sampled)
for loop with try catch x 498 ops/sec ±0.97% (86 runs sampled)
for loop without try catch x 512 ops/sec ±0.73% (88 runs sampled)
Fastest is JSON.parse with try catch,JSON.parse without try catch
```

QuickJS output:

```
JSON.parse with try catch x 10,040 ops/sec ±0.47% (53 runs sampled)
JSON.parse without try catch x 10,149 ops/sec ±0.55% (54 runs sampled)
for loop with try catch x 301 ops/sec ±0.67% (59 runs sampled)
for loop without try catch x 302 ops/sec ±0.45% (59 runs sampled)
Fastest is JSON.parse without try catch
```



[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```
obj[key] = true x 25,736 ops/sec ±0.60% (91 runs sampled)
lodash.uniq x 25,765 ops/sec ±0.29% (90 runs sampled)
Set x 27,923 ops/sec ±0.47% (92 runs sampled)
Fastest is Set
```

QuickJS output:

```
obj[key] = true x 10,054 ops/sec ±0.48% (53 runs sampled)
lodash.uniq x 5,713 ops/sec ±14.92% (32 runs sampled)
Set x 5,204 ops/sec ±18.07% (32 runs sampled)
Fastest is obj[key] = true
```



[util.format.js](benchmark/util.format.js)


Node.js output:

```
util.format x 1,029,826 ops/sec ±0.59% (90 runs sampled)
str.replace x 6,399,325 ops/sec ±0.46% (88 runs sampled)
custom fn x 617,779,039 ops/sec ±0.44% (93 runs sampled)
Fastest is custom fn
```

QuickJS output:

```
util.format x 137,786 ops/sec ±0.53% (62 runs sampled)
str.replace x 1,456,024 ops/sec ±0.51% (63 runs sampled)
custom fn x 3,499,109 ops/sec ±0.36% (61 runs sampled)
Fastest is custom fn
```



[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```
yield x 333 ops/sec ±0.90% (87 runs sampled)
yield* x 149 ops/sec ±1.20% (76 runs sampled)
closure x 3,413 ops/sec ±0.55% (92 runs sampled)
Fastest is closure
```

QuickJS output:

```
yield x 28.83 ops/sec ±0.62% (39 runs sampled)
yield* x 22.43 ops/sec ±0.79% (40 runs sampled)
closure x 161 ops/sec ±0.48% (59 runs sampled)
Fastest is closure
```


# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
