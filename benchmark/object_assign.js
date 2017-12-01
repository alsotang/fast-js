var _ = require('lodash');
var object1 = {a: 1, b: 2, c: 3};
var object2 = {a: 5, c: 10, d: 'text'};
var ieAssign = function(target) {
  'use strict';
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  target = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    if (source != null) {
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  return target;
}

suite('object_assign', function () {
  bench('Object.assign',function(){
		Object.assign({}, object1, object2);
	})

  bench('_.assign',function(){
		_.assign({}, object1, object2);
	})

  bench('es5 assign',function(){
		ieAssign({}, object1, object2);
	})
})
