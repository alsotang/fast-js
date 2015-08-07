# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[code](benchmark/new_array.js)

```
new_array
  new Array() .................................... 57,133,828 op/s
  [] ............................................. 139,662,678 op/s
```

[code](benchmark/start_with.js)

```
start_with
  regex /^ab/ .................................... 8,501,483 op/s
  indexOf === 0 .................................. 15,319,028 op/s
  lodash.startsWith .............................. 13,424,354 op/s
```