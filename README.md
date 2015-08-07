# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 7,657 op/s
  normal for loop. cache arr.length .............. 7,574 op/s
  native forEach ................................. 86 op/s
  lodash.forEach ................................. 666 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 712 op/s
  normal loop. use index ......................... 1,014 op/s
  new Array(arr.length) .......................... 2,383 op/s
  native map ..................................... 120 op/s
  lodash.forEach ................................. 454 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 43,260,312 op/s
  [] ............................................. 138,676,362 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 7,793,190 op/s
  indexOf === 0 .................................. 12,100,865 op/s
  lodash.startsWith .............................. 12,826,540 op/s
```

[str_to_number.js](benchmark/str_to_number.js)

```
str_to_int_number
  +str ........................................... 21,680,939 op/s
  Number(str) .................................... 40,203,820 op/s
  parseInt(str) .................................. 38,268,756 op/s
  parseInt(str, 10) .............................. 51,615,399 op/s
  ~~str .......................................... 18,753,210 op/s
  str | 0 ........................................ 19,118,039 op/s
  str >> 0 ....................................... 19,879,532 op/s
  str >>> 0 ...................................... 20,836,584 op/s
  str * 1 ........................................ 18,183,177 op/s
```