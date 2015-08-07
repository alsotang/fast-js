# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[code](benchmark/new_array.js)

```
new_array
  new Array() .................................... 55,098,470 op/s
  [] ............................................. 142,251,068 op/s
```

[code](benchmark/start_with.js)

```
start_with
  regex .......................................... 7,340,080 op/s
  indexOf ........................................ 14,071,897 op/s
  lodash.startsWith .............................. 14,187,641 op/s
```