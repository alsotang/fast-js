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
  [].slice.apply ................................. 10,345,865 op/s
  [].slice.call .................................. 9,226,320 op/s
  Array.prototype.slice.apply .................... 9,534,518 op/s
  Array.prototype.slice.call ..................... 8,939,057 op/s
  lodash.toArray ................................. 18,654,083 op/s
```

[array_from_set.js](benchmark/array_from_set.js)

```
array_from_set
  Array.from ..................................... 122,566 op/s
  Set#forEach .................................... 699,947 op/s
  arr[index] ..................................... 825,168 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 429,187 op/s
  lodash.cloneDeep ............................... 368,886 op/s
  lodash.clone. this is shallow clone ............ 2,422,667 op/s
```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co_wrap_vs_bluebird_coroutine
  co.wrap ........................................ 10,079 op/s
  bluebird.coroutine ............................. 661 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 13,079 op/s
  normal for loop. cache arr.length .............. 12,564 op/s
  native forEach ................................. 1,053 op/s
  lodash.forEach ................................. 1,177 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 1,931,178,067 op/s
  withHiddenClass ................................ 255,532,521 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 1,932,735,380 op/s
  outter ......................................... 254,131,841 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 160,924,524 op/s
  lodash.isEmpty(obj) ............................ 34,162,973 op/s
  JSON.stringify(obj) == {} ...................... 5,449,599 op/s
  Array.length === 0 ............................. 239,116,284 op/s
  lodash.isEmpty(arr) ............................ 15,999,059 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 132,709,645 op/s
  Object.keys .................................... 11,718,699 op/s
  lodash.forEach ................................. 6,699,610 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 642 op/s
  normal loop. use index ......................... 741 op/s
  new Array(arr.length) .......................... 1,607 op/s
  native map ..................................... 85 op/s
  lodash.forEach ................................. 631 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 1,876,141,339 op/s
  [] ............................................. 253,878,817 op/s
  [] and assign .................................. 48 op/s
  new Array(length) and assign ................... 182 op/s
```

[new_promise.js](benchmark/new_promise.js)

```
new_promise
  v8 native `new promise` ........................ 15,184,084 op/s
  bluebird `new promise` ......................... 5,263,119 op/s
  v8 native promise.resolve ...................... 17,131,364 op/s
  bluebird promise.resolve ....................... 7,097,747 op/s
  co ............................................. 634,827 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 4,520 op/s
  setTimeout(0) .................................. 2,539 op/s
  setImmediate ................................... 2,436 op/s
```

[obj_index.js](benchmark/obj_index.js)

```
obj_index
  number index `1` ............................... 193 op/s
  string index `1` ............................... 13 op/s
  dot index `b` .................................. 191 op/s
  string index `b` ............................... 194 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 139,129,087 op/s
  lodash.random .................................. 68,875,876 op/s
```

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 34,324,145 op/s
  Regex.exec ..................................... 32,566,164 op/s
  String.search .................................. 42,141,151 op/s
  test ........................................... 49,850,227 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 119,607,776 op/s
  lodash.sample .................................. 76,097,086 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 51,936,744 op/s
  indexOf === 0 .................................. 257,689,177 op/s
  lodash.startsWith .............................. 224,893,730 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 1,903,936,518 op/s
  += ............................................. 255,340,202 op/s
  arr.join("") ................................... 4,514,128 op/s
  str.concat ..................................... 125,851,752 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 1,853,887,419 op/s
  ~~str .......................................... 254,551,528 op/s
  Number(str) .................................... 253,523,561 op/s
  parseInt(str) .................................. 189,537,440 op/s
  parseInt(str, 10) .............................. 184,031,920 op/s
  str - 0 ........................................ 255,495,390 op/s
```

[try_catch.js](benchmark/try_catch.js)

```
try_catch
  JSON.parse with try catch ...................... 48,697 op/s
  JSON.parse without try catch ................... 47,312 op/s
  for loop with try catch ........................ 745 op/s
  for loop without try catch ..................... 790 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 51,647 op/s
  lodash.uniq .................................... 45,311 op/s
  Set ............................................ 34,895 op/s
```

[util.format.js](benchmark/util.format.js)

```
util.format
  util.format .................................... 1,963,375 op/s
  str.replace .................................... 19,043,684 op/s
  custom fn ...................................... 256,817,085 op/s
```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield_vs_closure
  yield .......................................... 505 op/s
  yield* ......................................... 229 op/s
  closure ........................................ 6,009 op/s
```

# contribute

1. add your test to benchmark dir
1. run $ make benchmark file=benchmark/xxx.js to run the benchmark
1. then send a pr to me, I would add the result to README.md
