# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 15.12.0
* v8: 8.6.395.17-node.27

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)

```
[].slice.apply x 24,161,207 ops/sec ±0.47% (90 runs sampled)
[].slice.call x 24,482,815 ops/sec ±0.40% (98 runs sampled)
Array.prototype.slice.apply x 23,746,224 ops/sec ±1.69% (90 runs sampled)
Array.prototype.slice.call x 23,380,228 ops/sec ±1.96% (90 runs sampled)
lodash.toArray x 11,952,731 ops/sec ±1.49% (92 runs sampled)
Fastest is [].slice.call,Array.prototype.slice.call

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`