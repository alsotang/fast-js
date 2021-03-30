const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const benchmark = require("{{{benchmark_file}}}");

benchmark.cases.forEach((caseObj) => {
  const isDefer = caseObj.fn.length === 1;
  suite.add(caseObj.name, function (deferred) {
    if (!isDefer) {
      caseObj.fn();
    } else {
      caseObj.fn(function () {
        deferred.resolve();
      })
    }
  }, {
    defer: isDefer
  });
});

suite
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  });

suite.run();
