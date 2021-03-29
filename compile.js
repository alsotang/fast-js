#! /usr/bin/env node

var fs = require('fs');
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const pathlib = require('path')
var _ = require('lodash');
var execSync = require('child_process').execSync;


var benchmarkDir = pathlib.join(__dirname, 'benchmark');
const distDir = pathlib.join(__dirname, 'dist');
rimraf.sync(distDir)
mkdirp.sync(distDir)

var allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter(function (fileName) {
  return _.endsWith(fileName, '.js');
});

const quickjsShimCode = `
import * as os from 'os';
globalThis.global = globalThis;
globalThis.setTimeout = globalThis.setTimeout || os.setTimeout;
`

allBenchmarks.forEach(function (fileName) {
  const src = pathlib.join(benchmarkDir, fileName)
  const target = pathlib.join(distDir, fileName)
  console.log(`npx browserify ${src}  -o ${target}`)
  execSync(`npx browserify ${src}  -o ${target}`)

  const targetContent = fs.readFileSync(target).toString();
  // There is no `global` variable in quickjs. So assign it. benchmark.js needs it
  fs.writeFileSync(target, `${quickjsShimCode} ${targetContent}`)
});