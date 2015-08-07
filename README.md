# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[code](benchmark/new_array.js)

```
new_array
  new Array() .................................... 54,714,077 op/s
  [] ............................................. 144,247,124 op/s
```

[code](benchmark/start_with.js)

```
start_with
  regex .......................................... 7,859,237 op/s
  indexOf ........................................ 13,888,687 op/s
  lodash.startsWith .............................. 14,749,644 op/s
```