#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var execSync = require('child_process').execSync;
var matchaCommand = path.join(__dirname, './node_modules/.bin/matcha');
var multiline = require('multiline');

var benchmarkDir = path.join(__dirname, 'benchmark');
var allBenchmarks = fs.readdirSync(benchmarkDir);
var readmeTemplate = _.template(fs.readFileSync(path.join(__dirname, 'README.template'), 'utf-8'));
var readmeLocate = path.join(__dirname, 'README.md');

allBenchmarks = allBenchmarks.filter(function (fileName) {
  return _.endsWith(fileName, '.js');
});

var benchmarkBlockTemplate = _.template(multiline(function () {
/*
[code](benchmark/<%= filename %>)

```
<%= benchmark_result %>
```
*/
}));

var result = [];

allBenchmarks.forEach(function (fileName) {
  var output = execSync(matchaCommand + ' -R plain ./benchmark/' + fileName).toString();

  // remove unnecessary output
  output = output.split('\n');
  _.range(5).forEach(function () {
    output.pop();
  });
  output = output.join('\n');
  // END remove unnecessary output

  var bmresult = benchmarkBlockTemplate({
    filename: fileName,
    benchmark_result: output,
  });

  result.push(bmresult);
});

var readmeText = readmeTemplate({
  benchmark_result: result.join('\n\n')
});

fs.writeFileSync(readmeLocate, readmeText);

