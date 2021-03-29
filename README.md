# fast-js

:heart_eyes: Writing Fast JavaScript

# env

* Node.js: 15.12.0
* v8: 8.6.395.17-node.27

# benchmark

[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```
[].slice.apply x 23,528,233 ops/sec ±1.42% (93 runs sampled)
[].slice.call x 23,161,042 ops/sec ±2.47% (89 runs sampled)
Array.prototype.slice.apply x 23,873,301 ops/sec ±1.03% (94 runs sampled)
Array.prototype.slice.call x 23,349,580 ops/sec ±1.42% (88 runs sampled)
lodash.toArray x 11,654,756 ops/sec ±1.33% (88 runs sampled)
Fastest is Array.prototype.slice.apply,[].slice.call

```

QuickJS output:

```
[].slice.apply x 447,684 ops/sec ±1.66% (61 runs sampled)
[].slice.call x 452,301 ops/sec ±0.82% (62 runs sampled)
Array.prototype.slice.apply x 498,277 ops/sec ±1.86% (60 runs sampled)
Array.prototype.slice.call x 527,603 ops/sec ±0.98% (64 runs sampled)
lodash.toArray x 296,199 ops/sec ±0.73% (61 runs sampled)
Fastest is Array.prototype.slice.call

```

# contribute

1. add your test to benchmark dir
1. run `$ node benchmark/xxx.js` to run the benchmark
1. then send a pr to me, I would add the result to README.md

# build

`$ make build`