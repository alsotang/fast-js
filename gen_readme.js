#! /usr/bin/env node

var fs = require('fs');
var pathlib = require('path');
var _ = require('lodash');
var execSync = require('child_process').execSync;
var nodeBin = 'node';
const qjsBin = 'qjs'
var multiline = require('multiline');

var benchmarkDir = pathlib.join(__dirname, 'benchmark');
const distDir = pathlib.join(__dirname, 'dist')
var readmeTemplate = _.template(fs.readFileSync(pathlib.join(__dirname, 'README.template.md'), 'utf-8'));
var readmeLocate = pathlib.join(__dirname, 'README.md');

var allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter(function (filename) {
  return _.endsWith(filename, '.js');
});

var benchmarkBlockTemplate = _.template(multiline(function () {
/*
[<%= filename %>](benchmark/<%= filename %>)


Node.js output:

```
<%= nodejs_benchmark_result %>
```

QuickJS output:

```
<%= qjs_benchmark_result %>
```
*/
}));

var result = [];

allBenchmarks.forEach(function (filename) {
  const benchmarkFile = pathlib.join(benchmarkDir, filename)
  const benchmarkDistFile = pathlib.join(distDir, filename)
  console.log(`${nodeBin} ${benchmarkFile}`)
  var nodejsOutput = execSync(`${nodeBin} ${benchmarkFile}`).toString();
  console.log(`${qjsBin} ${benchmarkDistFile}`)
  var qjsOutput = execSync(`${qjsBin} ${benchmarkDistFile}`).toString();

  var bmresult = benchmarkBlockTemplate({
    filename: filename,
    nodejs_benchmark_result: nodejsOutput,
    qjs_benchmark_result: qjsOutput,
  });

  result.push(bmresult);
});

var readmeText = readmeTemplate({
  benchmark_result: result.join('\n\n'),
  node_version: process.versions.node,
  v8_version: process.versions.v8,
  quickjs_version: execSync('qjs -h | grep version').toString().trim()
});

fs.writeFileSync(readmeLocate, readmeText);

