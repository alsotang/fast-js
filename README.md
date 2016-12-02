# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.12.1. MacBook Pro (13-inch, Late 2016, Four Thunderbolt 3 Ports)
* cpu: 3.3 GHz Intel Core i7
* Node.js: v6.5.0
* v8: 5.1.281.81

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
arguments_to_array
  [].slice.apply ................................. 9,919,833 op/s
  [].slice.call .................................. 9,176,903 op/s
  Array.prototype.slice.apply .................... 9,807,835 op/s
  Array.prototype.slice.call ..................... 10,203,895 op/s
  lodash.toArray ................................. 1,336,993 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 301,892 op/s
  lodash.cloneDeep ............................... 94,767 op/s
  lodash.clone. this is shadow clone ............. 669,544 op/s
```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co_wrap_vs_bluebird_coroutine
  co.wrap ........................................ 611 op/s
  bluebird.coroutine ............................. 197 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 12,432 op/s
  normal for loop. cache arr.length .............. 12,350 op/s
  native forEach ................................. 68 op/s
  lodash.forEach ................................. 965 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 44,118,966 op/s
  withHiddenClass ................................ 168,496,751 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 47,299,728 op/s
  outter ......................................... 157,379,460 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 22,317,886 op/s
  lodash.isEmpty(obj) ............................ 2,757,609 op/s
  JSON.stringify(obj) == {} ...................... 3,577,134 op/s
  Array.length === 0 ............................. 164,989,591 op/s
  lodash.isEmpty(arr) ............................ 1,976,651 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 13,203,494 op/s
  Object.keys .................................... 4,090,884 op/s
  lodash.forEach ................................. 3,172,312 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 836 op/s
  normal loop. use index ......................... 903 op/s
  new Array(arr.length) .......................... 1,418 op/s
  native map ..................................... 19 op/s
  lodash.forEach ................................. 526 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 124,923,352 op/s
  [] ............................................. 180,574,694 op/s
  [] and assign .................................. 48 op/s
  new Array(length) and assign ................... 152 op/s
```

[new_promise.js](benchmark/new_promise.js)

```
new_promise
  v8 native `new promise` ........................ 598,227 op/s
  bluebird `new promise` ......................... 2,789,641 op/s
  v8 native promise.resolve ...................... 709,624 op/s
  bluebird promise.resolve ....................... 3,957,377 op/s
  co ............................................. 121,673 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 2,739 op/s
  setTimeout(0) .................................. 2,287 op/s
  setImmediate ................................... 1,811 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 137,913,660 op/s
  lodash.random .................................. 24,590,930 op/s
```

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 17,185,142 op/s
  Regex.exec ..................................... 20,441,620 op/s
  String.search .................................. 15,360,969 op/s
  test ........................................... 16,402,585 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 116,341,354 op/s
  lodash.sample .................................. 33,167,483 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 15,588,183 op/s
  indexOf === 0 .................................. 8,585,598 op/s
  lodash.startsWith .............................. 11,728,822 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 891,710,289 op/s
  += ............................................. 143,225,234 op/s
  arr.join("") ................................... 4,174,586 op/s
  str.concat ..................................... 49,442,410 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 186,412,578 op/s
  ~~str .......................................... 27,129,151 op/s
  Number(str) .................................... 108,929,397 op/s
  parseInt(str) .................................. 62,555,246 op/s
  parseInt(str, 10) .............................. 84,415,719 op/s
```

[try_catch.js](benchmark/try_catch.js)

```
try_catch
  JSON.parse with try catch ...................... 57,802 op/s
  JSON.parse without try catch ................... 57,973 op/s
  for loop with try catch ........................ 470 op/s
  for loop without try catch ..................... 840 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 9,469 op/s
  lodash.uniq .................................... 9,593 op/s
```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield_vs_closure
  yield .......................................... 41 op/s
  yield* ......................................... 31 op/s
  closure ........................................ 1,723 op/s
```

# contribute

1. add your test to benchmark dir
1. run $ make benchmark file=benchmark/xxx.js to run the benchmark
1. then send a pr to me, I would add the result to README.md