# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[code](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 9,140 op/s
  normal for loop. cache arr.length .............. 9,234 op/s
  native forEach ................................. 159 op/s
  lodash.forEach ................................. 714 op/s
```

[code](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 1,192 op/s
  normal loop. use index ......................... 1,428 op/s
  new Array(arr.length) .......................... 3,966 op/s
  native map ..................................... 150 op/s
  lodash.forEach ................................. 635 op/s
```

[code](benchmark/new_array.js)

```
new_array
  new Array() .................................... 58,377,302 op/s
  [] ............................................. 157,288,434 op/s
```

[code](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 8,918,620 op/s
  indexOf === 0 .................................. 16,899,197 op/s
  lodash.startsWith .............................. 13,631,010 op/s
```

[code](benchmark/str_to_number.js)

```
str_to_int_number
  +str ........................................... 27,082,051 op/s
  Number(str) .................................... 47,276,315 op/s
  parseInt(str) .................................. 48,297,636 op/s
  parseInt(str, 10) .............................. 63,935,828 op/s
  ~~str .......................................... 24,339,460 op/s
  str | 0 ........................................ 24,432,672 op/s
  str >> 0 ....................................... 24,815,318 op/s
  str >>> 0 ...................................... 24,093,084 op/s
  str * 1 ........................................ 23,004,676 op/s
```