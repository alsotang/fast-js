# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.12.3. MacBook Pro (13-inch, Late 2016, Four Thunderbolt 3 Ports)
* cpu: 3.3 GHz Intel Core i7
* Node.js: v7.7.1
* v8: 5.5.372.41

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
arguments_to_array
  [].slice.apply ................................. 11,120,941 op/s
  [].slice.call .................................. 11,589,593 op/s
  Array.prototype.slice.apply .................... 11,253,203 op/s
  Array.prototype.slice.call ..................... 11,998,825 op/s
  lodash.toArray ................................. 6,995,421 op/s
```

[array_from_set.js](benchmark/array_from_set.js)

```
array_from_set
  Array.from ..................................... 69,124 op/s
  Set#forEach .................................... 284,046 op/s
  arr[index] ..................................... 304,354 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 335,763 op/s
  lodash.cloneDeep ............................... 168,861 op/s
  lodash.clone. this is shallow clone ............ 1,413,005 op/s
```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co_wrap_vs_bluebird_coroutine
  co.wrap ........................................ 946 op/s
  bluebird.coroutine ............................. 269 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 13,517 op/s
  normal for loop. cache arr.length .............. 12,311 op/s
  native forEach ................................. 805 op/s
  lodash.forEach ................................. 1,010 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 65,469,159 op/s
  withHiddenClass ................................ 177,638,968 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 44,395,847 op/s
  outter ......................................... 171,412,393 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 26,906,571 op/s
  lodash.isEmpty(obj) ............................ 14,749,809 op/s
  JSON.stringify(obj) == {} ...................... 3,800,525 op/s
  Array.length === 0 ............................. 186,561,252 op/s
  lodash.isEmpty(arr) ............................ 8,459,940 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 8,414,675 op/s
  Object.keys .................................... 3,517,409 op/s
  lodash.forEach ................................. 3,150,003 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 691 op/s
  normal loop. use index ......................... 722 op/s
  new Array(arr.length) .......................... 1,558 op/s
  native map ..................................... 114 op/s
  lodash.forEach ................................. 611 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 143,776,732 op/s
  [] ............................................. 196,548,052 op/s
  [] and assign .................................. 46 op/s
  new Array(length) and assign ................... 172 op/s
```

[new_promise.js](benchmark/new_promise.js)

```
new_promise
  v8 native `new promise` ........................ 898,936 op/s
  bluebird `new promise` ......................... 1,581,501 op/s
  v8 native promise.resolve ...................... 1,205,834 op/s
  bluebird promise.resolve ....................... 1,989,731 op/s
  co ............................................. 171,495 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 3,276 op/s
  setTimeout(0) .................................. 1,999 op/s
  setImmediate ................................... 2,696 op/s
```

[obj_index.js](benchmark/obj_index.js)

```
obj_index
  number index `1` ............................... 221 op/s
  string index `1` ............................... 14 op/s
  dot index `b` .................................. 195 op/s
  string index `b` ............................... 197 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 148,089,978 op/s
  lodash.random .................................. 26,040,570 op/s
```

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 19,539,238 op/s
  Regex.exec ..................................... 24,726,412 op/s
  String.search .................................. 16,972,960 op/s
  test ........................................... 19,596,318 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 129,251,702 op/s
  lodash.sample .................................. 53,010,794 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 20,738,494 op/s
  indexOf === 0 .................................. 19,939,839 op/s
  lodash.startsWith .............................. 24,565,036 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 930,367,131 op/s
  += ............................................. 154,614,643 op/s
  arr.join("") ................................... 5,067,728 op/s
  str.concat ..................................... 50,080,201 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 203,455,909 op/s
  ~~str .......................................... 88,871,756 op/s
  Number(str) .................................... 89,819,542 op/s
  parseInt(str) .................................. 63,820,034 op/s
  parseInt(str, 10) .............................. 90,282,951 op/s
  str - 0 ........................................ 85,779,155 op/s
```

[try_catch.js](benchmark/try_catch.js)

```
try_catch
  JSON.parse with try catch ...................... 61,294 op/s
  JSON.parse without try catch ................... 52,833 op/s
  for loop with try catch ........................ 676 op/s
  for loop without try catch ..................... 673 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 7,712 op/s
  lodash.uniq .................................... 9,232 op/s
  Set ............................................ 8,714 op/s
```

[util.format.js](benchmark/util.format.js)

```
util.format
  util.format .................................... 1,762,075 op/s
  str.replace .................................... 4,978,960 op/s
  custom fn ...................................... 79,359,430 op/s
```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield_vs_closure
  yield .......................................... 72 op/s
  yield* ......................................... 51 op/s
  closure ........................................ 1,441 op/s
```

# contribute

1. add your test to benchmark dir
1. run $ make benchmark file=benchmark/xxx.js to run the benchmark
1. then send a pr to me, I would add the result to README.md
