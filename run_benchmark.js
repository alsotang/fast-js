const compile = require("./compile");
const pathlib = require("path");

const { benchmarkDir, nodejsDistDir, quickjsDistDir } = require("./utils");
const execSync = require("child_process").execSync;

async function run(srcFilename) {
  await compile(srcFilename);

  const nodejsFilePath = pathlib.join(nodejsDistDir, srcFilename);
  const nodejsCommand = `node ${nodejsFilePath}`;
  console.log(nodejsCommand);
  const nodejsOutput = execSync(nodejsCommand).toString();
  console.log(nodejsOutput);

  const quickjsFilePath = pathlib.join(quickjsDistDir, srcFilename);
  const quickjsCommand = `qjs ${quickjsFilePath}`;
  console.log(quickjsCommand);
  const qjsOutput = execSync(quickjsCommand).toString();
  console.log(qjsOutput);

  return {
    nodejsOutput,
    qjsOutput,
  };
}
exports.run = run;

if (require.main === module) {
  const argv = process.argv;
  const srcFilename = argv[2];

  run(srcFilename);
}
