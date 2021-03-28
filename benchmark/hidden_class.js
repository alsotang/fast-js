// perhaps microbenchmarking here make no sense
// can anyone provide a more meaningful cases?

// about hidden class: https://developers.google.com/v8/design#prop_access
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite()
function withoutHiddenClass() {

}
withoutHiddenClass.prototype.timeout = timeout;
withoutHiddenClass.prototype.url = url;
withoutHiddenClass.prototype.type = type;

function withHiddenClass() {
  this._timeout = 0;
  this._url = '';
  this._type = '';
}
withHiddenClass.prototype.timeout = timeout;
withHiddenClass.prototype.url = url;
withHiddenClass.prototype.type = type;

function timeout(timeout) {
  this._timeout = timeout;
}

function url(url) {
  this._url = url;
}

function type(type) {
  this._type = type;
}

suite.add(function () {
  // warm up
  for (var i = 0; i < 10000000; i++) {
    var a = new withoutHiddenClass();
    var b = new withHiddenClass();
  }
});

suite.add('withoutHiddenClass', function () {
  var obj = new withoutHiddenClass();
  obj.timeout(1);
  obj.url('google.com');
  obj.type('get')
});

suite.add('withHiddenClass', function () {
  var obj = new withHiddenClass();
  obj.timeout(1);
  obj.url('google.com');
  obj.type('get')
});

suite.on('cycle', function (event) {
  console.log(String(event.target));
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

suite.run()