const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const benchmark = require("{{{benchmark_file}}}");

benchmark.cases.forEach((caseObj) => {
  suite.add(caseObj.name, caseObj.fn);
});

suite
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  });

suite.run();
