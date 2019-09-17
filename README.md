# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.14.6. MacBook Pro (15-inch, 2018)
* cpu: 2.2 GHz Intel Core i7
* Node.js: v11.13.0
* v8: 7.0.276.38-node.18

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
arguments_to_array
  [].slice.apply ................................. 10,467,914 op/s
  [].slice.call .................................. 9,097,008 op/s
  Array.prototype.slice.apply .................... 9,063,436 op/s
  Array.prototype.slice.call ..................... 7,581,630 op/s
  lodash.toArray ................................. 15,341,482 op/s
```

[array_from_set.js](benchmark/array_from_set.js)

```
array_from_set
  Array.from ..................................... 121,690 op/s
  Set#forEach .................................... 602,596 op/s
  arr[index] ..................................... 806,180 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 413,330 op/s
  lodash.cloneDeep ............................... 372,348 op/s
  lodash.clone. this is shallow clone ............ 2,357,969 op/s
```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co_wrap_vs_bluebird_coroutine
  co.wrap ........................................ 9,918 op/s
  bluebird.coroutine ............................. 647 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 12,253 op/s
  normal for loop. cache arr.length .............. 12,178 op/s
  native forEach ................................. 1,001 op/s
  lodash.forEach ................................. 1,167 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 1,818,361,310 op/s
  withHiddenClass ................................ 227,820,368 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 1,847,440,888 op/s
  outter ......................................... 243,106,313 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 159,753,805 op/s
  lodash.isEmpty(obj) ............................ 33,215,966 op/s
  JSON.stringify(obj) == {} ...................... 5,357,035 op/s
  Array.length === 0 ............................. 233,928,740 op/s
  lodash.isEmpty(arr) ............................ 16,635,304 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 129,879,683 op/s
  Object.keys .................................... 12,041,019 op/s
  lodash.forEach ................................. 7,204,121 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 709 op/s
  normal loop. use index ......................... 758 op/s
  new Array(arr.length) .......................... 1,779 op/s
  native map ..................................... 86 op/s
  lodash.forEach ................................. 697 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 1,876,793,422 op/s
  [] ............................................. 194,280,013 op/s
  [] and assign .................................. 49 op/s
  new Array(length) and assign ................... 189 op/s
```

[new_promise.js](benchmark/new_promise.js)

```
new_promise
  v8 native `new promise` ........................ 14,226,946 op/s
  bluebird `new promise` ......................... 5,240,978 op/s
  v8 native promise.resolve ...................... 17,184,513 op/s
  bluebird promise.resolve ....................... 7,203,127 op/s
  co ............................................. 682,287 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 4,471 op/s
  setTimeout(0) .................................. 1,719 op/s
  setImmediate ................................... 2,915 op/s
```

[obj_index.js](benchmark/obj_index.js)

```
obj_index
  number index `1` ............................... 191 op/s
  string index `1` ............................... 12 op/s
  dot index `b` .................................. 192 op/s
  string index `b` ............................... 191 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 138,548,597 op/s
  lodash.random .................................. 68,037,077 op/s
```

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 33,764,671 op/s
  Regex.exec ..................................... 30,553,256 op/s
  String.search .................................. 39,657,223 op/s
  test ........................................... 47,538,872 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 120,468,740 op/s
  lodash.sample .................................. 76,247,874 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 52,238,294 op/s
  indexOf === 0 .................................. 251,476,549 op/s
  lodash.startsWith .............................. 216,473,772 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 1,864,674,551 op/s
  += ............................................. 247,954,323 op/s
  arr.join("") ................................... 4,272,730 op/s
  str.concat ..................................... 123,592,023 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 1,851,602,585 op/s
  ~~str .......................................... 246,209,881 op/s
  Number(str) .................................... 247,447,125 op/s
  parseInt(str) .................................. 168,341,732 op/s
  parseInt(str, 10) .............................. 174,250,309 op/s
  str - 0 ........................................ 235,852,645 op/s
```

[try_catch.js](benchmark/try_catch.js)

```
try_catch
  JSON.parse with try catch ...................... 47,775 op/s
  JSON.parse without try catch ................... 48,004 op/s
  for loop with try catch ........................ 767 op/s
  for loop without try catch ..................... 751 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 47,326 op/s
  lodash.uniq .................................... 48,309 op/s
  Set ............................................ 34,185 op/s
```

[util.format.js](benchmark/util.format.js)

```
util.format
  util.format .................................... 1,900,150 op/s
  str.replace .................................... 18,278,409 op/s
  custom fn ...................................... 237,894,462 op/s
```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield_vs_closure
  yield .......................................... 490 op/s
  yield* ......................................... 229 op/s
  closure ........................................ 6,145 op/s
```

# contribute

1. add your test to benchmark dir
1. run $ make benchmark file=benchmark/xxx.js to run the benchmark
1. then send a pr to me, I would add the result to README.md
