# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.10.4
* cpu: 1.4 GHz Intel Core i5
* iojs: v2.3.0
* v8: 4.2.77.20

# benchmark

[for_loop.js](benchmark/for_loop.js)

```
for_loop
  normal for loop. i < arr.length ................ 7,981 op/s
  normal for loop. cache arr.length .............. 7,826 op/s
  native forEach ................................. 130 op/s
  lodash.forEach ................................. 683 op/s
```

[map_loop.js](benchmark/map_loop.js)

```
map_loop
  normal loop. use push .......................... 1,174 op/s
  normal loop. use index ......................... 1,306 op/s
  new Array(arr.length) .......................... 3,576 op/s
  native map ..................................... 140 op/s
  lodash.forEach ................................. 617 op/s
```

[new_array.js](benchmark/new_array.js)

```
new_array
  new Array() .................................... 55,032,671 op/s
  [] ............................................. 146,600,244 op/s
```

[start_with.js](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 8,301,314 op/s
  indexOf === 0 .................................. 14,225,778 op/s
  lodash.startsWith .............................. 13,772,878 op/s
```

[str_to_number.js](benchmark/str_to_number.js)

```
str_to_int_number
  +str ........................................... 22,831,069 op/s
  Number(str) .................................... 40,123,100 op/s
  parseInt(str) .................................. 38,274,895 op/s
  parseInt(str, 10) .............................. 58,588,105 op/s
  ~~str .......................................... 21,742,556 op/s
  str | 0 ........................................ 21,449,035 op/s
  str >> 0 ....................................... 20,287,332 op/s
  str >>> 0 ...................................... 20,554,807 op/s
  str * 1 ........................................ 19,601,457 op/s
```