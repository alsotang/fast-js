# fast-js

:heart_eyes: Writing Fast JavaScript

# env

platform: OS X 10.10.4
cpu: 1.4 GHz Intel Core i5
iojs: v2.3.0
v8: 4.2.77.20

# benchmark

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 8,935 op/s
  normal for loop. cache arr.length .............. 8,968 op/s
  native forEach ................................. 147 op/s
  lodash.forEach ................................. 695 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 1,244 op/s
  normal loop. use index ......................... 1,380 op/s
  new Array(arr.length) .......................... 4,110 op/s
  native map ..................................... 140 op/s
  lodash.forEach ................................. 606 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 49,412,907 op/s
  [] ............................................. 139,176,592 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 6,613,261 op/s
  indexOf === 0 .................................. 13,028,245 op/s
  lodash.startsWith .............................. 11,988,156 op/s
```

[str_to_number.js](benchmark/str_to_number.js)

```
str_to_int_number
  +str ........................................... 23,431,382 op/s
  Number(str) .................................... 32,364,588 op/s
  parseInt(str) .................................. 40,225,603 op/s
  parseInt(str, 10) .............................. 53,428,601 op/s
  ~~str .......................................... 21,298,686 op/s
  str | 0 ........................................ 20,928,388 op/s
  str >> 0 ....................................... 21,521,741 op/s
  str >>> 0 ...................................... 21,925,972 op/s
  str * 1 ........................................ 19,500,591 op/s
```