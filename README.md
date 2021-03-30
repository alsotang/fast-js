# fast-js

:heart_eyes: Writing fast JavaScript on Node.js or QuickJS

Here are many benchmark results produced from Node.js or QuickJS runtime.

# env

- Node.js: 15.12.0
- v8: 8.6.395.17-node.27
- QuickJS: QuickJS version 2021-03-27

# benchmark


[arguments_to_array.js](benchmark/arguments_to_array.js)


Node.js output:

```

```

QuickJS output:

```

```



[array_from_set.js](benchmark/array_from_set.js)


Node.js output:

```

```

QuickJS output:

```

```



[clone_object.js](benchmark/clone_object.js)


Node.js output:

```

```

QuickJS output:

```

```



[co_wrap_vs_bluebrid_coroutine.js](benchmark/co_wrap_vs_bluebrid_coroutine.js)


Node.js output:

```

```

QuickJS output:

```

```



[for_loop.js](benchmark/for_loop.js)


Node.js output:

```

```

QuickJS output:

```

```



[hidden_class.js](benchmark/hidden_class.js)


Node.js output:

```

```

QuickJS output:

```

```



[inner_function.js](benchmark/inner_function.js)


Node.js output:

```

```

QuickJS output:

```

```



[is_object_empty.js](benchmark/is_object_empty.js)


Node.js output:

```

```

QuickJS output:

```

```



[iterate_object.js](benchmark/iterate_object.js)


Node.js output:

```

```

QuickJS output:

```

```



[map_loop.js](benchmark/map_loop.js)


Node.js output:

```

```

QuickJS output:

```

```



[new_array.js](benchmark/new_array.js)


Node.js output:

```

```

QuickJS output:

```

```



[new_promise.js](benchmark/new_promise.js)


Node.js output:

```

```

QuickJS output:

```

```



[obj_index.js](benchmark/obj_index.js)


Node.js output:

```

```

QuickJS output:

```

```



[random_int.js](benchmark/random_int.js)


Node.js output:

```

```

QuickJS output:

```

```



[regex_method.js](benchmark/regex_method.js)


Node.js output:

```

```

QuickJS output:

```

```



[sample_from_array.js](benchmark/sample_from_array.js)


Node.js output:

```

```

QuickJS output:

```

```



[start_with.js](benchmark/start_with.js)


Node.js output:

```

```

QuickJS output:

```

```



[str_concat.js](benchmark/str_concat.js)


Node.js output:

```

```

QuickJS output:

```

```



[str_to_int_number.js](benchmark/str_to_int_number.js)


Node.js output:

```

```

QuickJS output:

```

```



[try_catch.js](benchmark/try_catch.js)


Node.js output:

```

```

QuickJS output:

```

```



[uniq_str_array.js](benchmark/uniq_str_array.js)


Node.js output:

```

```

QuickJS output:

```

```



[util.format.js](benchmark/util.format.js)


Node.js output:

```

```

QuickJS output:

```

```



[yield_vs_closure.js](benchmark/yield_vs_closure.js)


Node.js output:

```

```

QuickJS output:

```

```


# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
