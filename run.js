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
allBenchmarks = allBenchmarks.filter(function (fileName) {
  return _.endsWith(fileName, '.js');
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

allBenchmarks.forEach(function (fileName) {
  const benchmarkDistFile = pathlib.join(distDir, fileName)
  console.log(`${nodeBin} ${benchmarkDistFile}`)
  var nodejsOutput = execSync(`${nodeBin} ${benchmarkDistFile}`).toString();
  console.log(`${qjsBin} ${benchmarkDistFile}`)
  var qjsOutput = execSync(`${qjsBin} ${benchmarkDistFile}`).toString();

  var bmresult = benchmarkBlockTemplate({
    filename: fileName,
    nodejs_benchmark_result: nodejsOutput,
    qjs_benchmark_result: qjsOutput,
  });

  result.push(bmresult);
});

var readmeText = readmeTemplate({
  benchmark_result: result.join('\n\n'),
  node_version: process.versions.node,
  v8_version: process.versions.v8,
});

fs.writeFileSync(readmeLocate, readmeText);

