# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.10.4
* cpu: 1.4 GHz Intel Core i5
* iojs: v2.3.0
* v8: 4.2.77.20

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
arguments_to_array
  [].slice.apply ................................. 4,809,000 op/s
  [].slice.call .................................. 6,087,795 op/s
  Array.prototype.slice.apply .................... 5,090,501 op/s
  Array.prototype.slice.call ..................... 5,772,734 op/s
  lodash.toArray ................................. 20,535,733 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 9,383 op/s
  normal for loop. cache arr.length .............. 8,876 op/s
  native forEach ................................. 158 op/s
  lodash.forEach ................................. 759 op/s
```

[hidden_class.js](benchmark/hidden_class.js)

```
hidden_class
  withoutHiddenClass ............................. 88,629,340 op/s
  withHiddenClass ................................ 132,616,192 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 19,100,518 op/s
  Object.keys .................................... 2,221,313 op/s
  lodash.forEach ................................. 1,133,300 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 1,163 op/s
  normal loop. use index ......................... 1,339 op/s
  new Array(arr.length) .......................... 3,743 op/s
  native map ..................................... 131 op/s
  lodash.forEach ................................. 631 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 56,266,831 op/s
  [] ............................................. 150,256,132 op/s
```

[next_tick.js](benchmark/next_tick.js)

```
next_tick
  process.nextTick ............................... 2,394 op/s
  setTimeout(0) .................................. 1,741 op/s
  setImmediate ................................... 2,486 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 8,716,433 op/s
  indexOf === 0 .................................. 15,946,472 op/s
  lodash.startsWith .............................. 14,568,277 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 647,144,711 op/s
  += ............................................. 117,647,073 op/s
  .join("") ...................................... 2,881,038 op/s
  str.concat ..................................... 39,336,416 op/s
```

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 25,534,273 op/s
  Number(str) .................................... 46,971,435 op/s
  parseInt(str) .................................. 42,430,861 op/s
  parseInt(str, 10) .............................. 60,448,717 op/s
  ~~str .......................................... 22,405,632 op/s
  str | 0 ........................................ 21,872,214 op/s
  str >> 0 ....................................... 22,990,384 op/s
  str >>> 0 ...................................... 23,423,670 op/s
  str * 1 ........................................ 22,640,213 op/s
```

# contribute

1. add your test to `benchmark` dir
1. run `$ make build` and it will update README.md including new test