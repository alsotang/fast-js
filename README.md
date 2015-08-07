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
  [].slice.apply ................................. 4,662,914 op/s
  [].slice.call .................................. 6,318,393 op/s
  Array.prototype.slice.apply .................... 5,029,389 op/s
  Array.prototype.slice.call ..................... 6,208,491 op/s
  lodash.toArray ................................. 21,011,183 op/s
```

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 9,003 op/s
  normal for loop. cache arr.length .............. 9,205 op/s
  native forEach ................................. 162 op/s
  lodash.forEach ................................. 763 op/s
```

[iterate_object.js](benchmark/iterate_object.js)

```
iterate_object
  for .. in .. ................................... 18,426,710 op/s
  Object.keys .................................... 2,277,960 op/s
  lodash.forEach ................................. 1,206,997 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 1,268 op/s
  normal loop. use index ......................... 1,355 op/s
  new Array(arr.length) .......................... 3,982 op/s
  native map ..................................... 150 op/s
  lodash.forEach ................................. 618 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 58,636,632 op/s
  [] ............................................. 166,416,932 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 8,519,088 op/s
  indexOf === 0 .................................. 16,156,312 op/s
  lodash.startsWith .............................. 16,270,448 op/s
```

[str_concat.js](benchmark/str_concat.js)

```
str_concat
  + .............................................. 659,491,252 op/s
  += ............................................. 137,097,593 op/s
  .join("") ...................................... 3,050,419 op/s
  str.concat ..................................... 42,245,644 op/s
```

[str_to_number.js](benchmark/str_to_number.js)

```
str_to_int_number
  +str ........................................... 25,661,317 op/s
  Number(str) .................................... 43,552,242 op/s
  parseInt(str) .................................. 48,639,629 op/s
  parseInt(str, 10) .............................. 65,141,153 op/s
  ~~str .......................................... 23,423,614 op/s
  str | 0 ........................................ 22,351,776 op/s
  str >> 0 ....................................... 23,741,309 op/s
  str >>> 0 ...................................... 24,424,159 op/s
  str * 1 ........................................ 22,207,258 op/s
```

# contribute

1. add your test to `benchmark` dir
1. run `$ make build` and it will update README.md including new test