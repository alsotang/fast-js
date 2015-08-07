// perhaps microbenchmarking here make no sense
// can anyone provide a more meaningful cases?

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

suite('hidden_class', function () {

  bench('withoutHiddenClass', function () {
    var obj = new withoutHiddenClass();
    obj.timeout(1);
    obj.url('google.com');
    obj.type('get')
  });

  bench('withHiddenClass', function () {
    var obj = new withHiddenClass();
    obj.timeout(1);
    obj.url('google.com');
    obj.type('get')
  });


})