#! /usr/bin/env node

const fs = require("fs");
const pathlib = require("path");
const _ = require("lodash");
const execSync = require("child_process").execSync;
const { run } = require("./run_benchmark");
const { benchmarkDir, nodejsDistDir, quickjsDistDir } = require("./utils");

const readmeTemplate = _.template(
  fs.readFileSync(pathlib.join(__dirname, "README.template.md"), "utf-8")
);
const readmeLocate = pathlib.join(__dirname, "README.md");

let allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter(function (filename) {
  return _.endsWith(filename, ".js");
});

const codeBlock = "```";
const benchmarkBlockTemplate = _.template(String.raw`
[<%= filename %>](benchmark/<%= filename %>)


Node.js output:

${codeBlock}
<%= nodejs_benchmark_result %>
${codeBlock}

QuickJS output:

${codeBlock}
<%= qjs_benchmark_result %>
${codeBlock}
`);

async function main() {
  const result = [];

  for (const srcFilename of allBenchmarks) {
    const { nodejsOutput, qjsOutput } = await run(srcFilename);

    const bmresult = benchmarkBlockTemplate({
      filename: srcFilename,
      nodejs_benchmark_result: nodejsOutput.trim(),
      qjs_benchmark_result: qjsOutput.trim(),
    });

    result.push(bmresult);
  }

  const readmeText = readmeTemplate({
    benchmark_result: result.join("\n\n"),
    node_version: process.versions.node,
    v8_version: process.versions.v8,
    quickjs_version: execSync("qjs -h | grep version").toString().trim(),
  });

  fs.writeFileSync(readmeLocate, readmeText);
}

main();
