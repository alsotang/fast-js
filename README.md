# fast-js

:heart_eyes: Writing Fast JavaScript

# benchmark

[code](benchmark/new_array.js.js)

```
new_array
  new Array() .................................... 53,441,295 op/s
  [] ............................................. 135,052,485 op/s
```

[code](benchmark/start_with.js.js)

```
start_with
  regex .......................................... 8,460,168 op/s
  indexOf ........................................ 16,853,812 op/s
  lodash.startsWith .............................. 15,060,757 op/s
```