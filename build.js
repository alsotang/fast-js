#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var execSync = require('child_process').execSync;
var nodeBin = 'node';
var multiline = require('multiline');

var benchmarkDir = path.join(__dirname, 'benchmark');
var readmeTemplate = _.template(fs.readFileSync(path.join(__dirname, 'README.template.md'), 'utf-8'));
var readmeLocate = path.join(__dirname, 'README.md');

var allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter(function (fileName) {
  return _.endsWith(fileName, '.js');
});

var benchmarkBlockTemplate = _.template(multiline(function () {
/*
[<%= filename %>](benchmark/<%= filename %>)

```
<%= benchmark_result %>
```
*/
}));

var result = [];

allBenchmarks.forEach(function (fileName) {
  console.log(`execSync ${nodeBin + ' ./benchmark/' + fileName}`)
  var output = execSync(nodeBin + ' ./benchmark/' + fileName).toString();

  var bmresult = benchmarkBlockTemplate({
    filename: fileName,
    benchmark_result: output,
    node_version: process.versions.node,
    v8_version: process.versions.v8,
  });

  result.push(bmresult);
});

var readmeText = readmeTemplate({
  benchmark_result: result.join('\n\n')
});

fs.writeFileSync(readmeLocate, readmeText);

