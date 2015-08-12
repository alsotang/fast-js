# fast-js

:heart_eyes: Writing Fast JavaScript

each file has its own comment that illustrate why faster

# env

* platform: OS X 10.10.4
* cpu: 1.4 GHz Intel Core i5
* iojs: v2.3.0
* v8: 4.2.77.20

# benchmark

[regex_method.js](benchmark/regex_method.js)

```
regex_method
  String.match ................................... 940,477 op/s
  Regex.exec ..................................... 9,934,408 op/s
  String.search .................................. 12,482,858 op/s
  test ........................................... 17,508,991 op/s
```

[random_int.js](benchmark/random_int.js)

```
random_int
  Math.random % range ............................ 96,766,824 op/s
  lodash.random .................................. 22,369,157 op/s
```

[is_object_empty.js](benchmark/is_object_empty.js)

```
is_object_empty
  Object.keys().length === 0 ..................... 5,619,592 op/s
  lodash.isEmpty(obj) ............................ 2,425,126 op/s
  Array.length === 0 ............................. 146,193,232 op/s
  lodash.isEmpty(arr) ............................ 36,581,344 op/s
```

[sample_from_array.js](benchmark/sample_from_array.js)

```
sample_from_array
  Math.random % arr.length ....................... 91,554,398 op/s
  lodash.sample .................................. 15,749,745 op/s
```

[uniq_str_array.js](benchmark/uniq_str_array.js)

```
uniq_str_array
  obj[key] = true ................................ 5,957 op/s
  lodash.uniq .................................... 11,333 op/s
```

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
arguments_to_array
  [].slice.apply ................................. 3,846,459 op/s
  [].slice.call .................................. 3,718,698 op/s
  Array.prototype.slice.apply .................... 3,240,713 op/s
  Array.prototype.slice.call ..................... 4,390,122 op/s
  lodash.toArray ................................. 13,271,549 op/s
```

[clone_object.js](benchmark/clone_object.js)

```
clone_object
  JSON.parse(JSON.stringify) ..................... 192,176 op/s
  lodash.cloneDeep .................................... 151,387 op/s
  lodash.clone. this is shadow clone .................. 918,130 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 7,143 op/s
  normal for loop. cache arr.length .............. 7,070 op/s
  native forEach ................................. 145 op/s
  lodash.forEach ................................. 656 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 40,051,618 op/s
  withHiddenClass ................................ 54,829,686 op/s
```

[inner_function.js](benchmark/inner_function.js)

```
inner_function
  inner .......................................... 23,634,031 op/s
  outter ......................................... 94,173,853 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 19,144,156 op/s
  Object.keys .................................... 1,858,462 op/s
  lodash.forEach ................................. 863,574 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 796 op/s
  normal loop. use index ......................... 1,223 op/s
  new Array(arr.length) .......................... 3,539 op/s
  native map ..................................... 132 op/s
  lodash.forEach ................................. 611 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 58,084,959 op/s
  [] ............................................. 162,278,430 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 2,315 op/s
  setTimeout(0) .................................. 1,938 op/s
  setImmediate ................................... 1,349 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 6,753,906 op/s
  indexOf === 0 .................................. 12,967,224 op/s
  lodash.startsWith .............................. 14,404,678 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 609,026,862 op/s
  += ............................................. 121,310,295 op/s
  arr.join("") ................................... 3,004,308 op/s
  str.concat ..................................... 31,938,318 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 23,294,152 op/s
  ~~str .......................................... 24,858,884 op/s
  Number(str) .................................... 46,948,016 op/s
  parseInt(str) .................................. 41,145,945 op/s
  parseInt(str, 10) .............................. 61,879,685 op/s
```

# contribute

1. add your test to `benchmark` dir
1. run `$ make benchmark file=benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md
