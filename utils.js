const pathlib = require("path");

const projectRoot = (exports.projectRoot = __dirname);
exports.benchmarkDir = pathlib.join(projectRoot, "benchmark");
exports.nodejsDistDir = pathlib.join(projectRoot, "dist", "node");
exports.quickjsDistDir = pathlib.join(projectRoot, "dist", "quickjs");
