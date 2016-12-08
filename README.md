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
  [].slice.apply ................................. 10,486,451 op/s
  [].slice.call .................................. 10,328,249 op/s
  Array.prototype.slice.apply .................... 9,534,380 op/s
  Array.prototype.slice.call ..................... 10,341,992 op/s
  lodash.toArray ................................. 1,348,771 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 314,800 op/s
  lodash.cloneDeep ............................... 95,872 op/s
  lodash.clone. this is shallow clone ............ 691,342 op/s
```

[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)

```
co_wrap_vs_bluebird_coroutine
  co.wrap ........................................ 598 op/s
  bluebird.coroutine ............................. 200 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 12,506 op/s
  normal for loop. cache arr.length .............. 12,331 op/s
  native forEach ................................. 62 op/s
  lodash.forEach ................................. 954 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 56,701,457 op/s
  withHiddenClass ................................ 138,966,120 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 49,499,787 op/s
  outter ......................................... 159,356,425 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 22,320,028 op/s
  lodash.isEmpty(obj) ............................ 2,769,073 op/s
  JSON.stringify(obj) == {} ...................... 3,489,263 op/s
  Array.length === 0 ............................. 162,827,846 op/s
  lodash.isEmpty(arr) ............................ 1,679,149 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 12,691,046 op/s
  Object.keys .................................... 4,181,250 op/s
  lodash.forEach ................................. 3,280,700 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 741 op/s
  normal loop. use index ......................... 750 op/s
  new Array(arr.length) .......................... 1,155 op/s
  native map ..................................... 19 op/s
  lodash.forEach ................................. 532 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 128,523,408 op/s
  [] ............................................. 182,986,267 op/s
  [] and assign .................................. 43 op/s
  new Array(length) and assign ................... 152 op/s
```

[new_promise.js](benchmark/new_promise.js)

```
new_promise
  v8 native `new promise` ........................ 636,418 op/s
  bluebird `new promise` ......................... 2,795,173 op/s
  v8 native promise.resolve ...................... 728,241 op/s
  bluebird promise.resolve ....................... 3,814,943 op/s
  co ............................................. 112,539 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 2,600 op/s
  setTimeout(0) .................................. 1,692 op/s
  setImmediate ................................... 2,430 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 132,283,285 op/s
  lodash.random .................................. 23,329,067 op/s
```

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 15,700,966 op/s
  Regex.exec ..................................... 20,156,399 op/s
  String.search .................................. 14,260,821 op/s
  test ........................................... 16,170,621 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 115,845,534 op/s
  lodash.sample .................................. 32,174,745 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 16,666,312 op/s
  indexOf === 0 .................................. 18,224,183 op/s
  lodash.startsWith .............................. 11,865,220 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 896,822,489 op/s
  += ............................................. 136,218,266 op/s
  arr.join("") ................................... 3,345,147 op/s
  str.concat ..................................... 49,023,639 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 210,191,067 op/s
  ~~str .......................................... 29,193,736 op/s
  Number(str) .................................... 104,505,724 op/s
  parseInt(str) .................................. 63,482,562 op/s
  parseInt(str, 10) .............................. 77,910,228 op/s
  str - 0 ........................................ 27,251,926 op/s
```

[try_catch.js](benchmark/try_catch.js)

```
try_catch
  JSON.parse with try catch ...................... 57,886 op/s
  JSON.parse without try catch ................... 58,302 op/s
  for loop with try catch ........................ 485 op/s
  for loop without try catch ..................... 815 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 9,769 op/s
  lodash.uniq .................................... 9,002 op/s
```

[yield_vs_closure.js](benchmark/yield_vs_closure.js)

```
yield_vs_closure
  yield .......................................... 41 op/s
  yield* ......................................... 31 op/s
  closure ........................................ 1,727 op/s
```

[obj_index.js](benchmark/obj_index.js)

```
obj_index
  number index `1` ............................... 210 op/s
  string index `1` ............................... 26 op/s
  dot index `b` .................................. 189 op/s
  string index `b` ............................... 185 op/s
```

# contribute

1. add your test to benchmark dir
1. run $ make benchmark file=benchmark/xxx.js to run the benchmark
1. then send a pr to me, I would add the result to README.md
