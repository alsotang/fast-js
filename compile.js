const fs = require("fs");
const mkdirp = require("mkdirp");
const pathlib = require("path");
const browserify = require("browserify");
const stream = require("stream");
const { benchmarkDir, nodejsDistDir, quickjsDistDir } = require("./utils");

// mkdir dist dir
mkdirp.sync(nodejsDistDir);
mkdirp.sync(quickjsDistDir);

// shim code for quickjs
const quickjsShimCode = `
import * as os from 'os';
globalThis.global = globalThis;
globalThis.setTimeout = globalThis.setTimeout || os.setTimeout;
`;

async function compile(srcFilename) {
  return new Promise((resolve) => {
    console.log(`compiling ${srcFilename} ...`);
    const benchmarkTemplate = fs.readFileSync(
      pathlib.join(__dirname, "benchmark_template.js"),
      "utf-8"
    );

    const benchmarkFilePath = pathlib.join(benchmarkDir, srcFilename);
    // inject require path
    const finalBenchmarkContent = benchmarkTemplate.replace(
      "{{{benchmark_file}}}",
      benchmarkFilePath
    );

    // construct readable stream for browserify
    const readableStream = new stream.Readable();
    readableStream.push(finalBenchmarkContent);
    readableStream.push(null);

    // bundle and output to dist
    browserify(readableStream, { basedir: benchmarkDir }).bundle(function (
      err,
      buf
    ) {
      const nodejsTarget = pathlib.join(nodejsDistDir, srcFilename);
      const quickjsTarget = pathlib.join(quickjsDistDir, srcFilename);

      fs.writeFileSync(nodejsTarget, `${buf.toString()}`);
      fs.writeFileSync(quickjsTarget, `${quickjsShimCode} ${buf.toString()}`);
      resolve();
    });
  });
}

exports = module.exports = compile;
