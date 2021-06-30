# fast-js

:heart_eyes: Writing fast JavaScript on Node.js and QuickJS

Here are many benchmark results produced from Node.js and QuickJS runtime.

# env

- Node.js: <%= node_version %>
- v8: <%= v8_version %>
- QuickJS: <%= quickjs_version %>

# benchmark

<%= benchmark_result %>

# contribute

1. add your test to the `./benchmark` dir
1. run `$ node run_benchmark.js only_file_name_without_dir.js` to run the benchmark
1. send a pr to me, I would add the result to README.md

# complete build

see [.github/workflows/update_benchmark.yml](.github/workflows/update_benchmark.yml)
