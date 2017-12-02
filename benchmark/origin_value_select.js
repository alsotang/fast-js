var _ = require('lodash');
var selectors = _.map(_.range(1000), (val) => Boolean(val % 2));

suite('origin_value_select', function () {
  bench('normal select forward', function () {
    for (var i = 0; i < selectors.length; i++) {
      if(selectors[i]) {
        selectors[i];// this is data return
      }else {
        'default';
      }
    }
  })

  bench('forward || behind', function () {
    for (var i = 0; i < selectors.length; i++) {
      selectors[i] || 'default';
    }
  })

  bench('normal select behind', function () {
    for (var i = 0; i < selectors.length; i++) {
      if(!selectors[i]) {
        selectors[i];
      }else {
        'data return';
      }
    }
  })

  bench('forward && behind', function () {
    for (var i = 0; i < selectors.length; i++) {
      selectors[i] && 'data return';
    }
  })

  bench('selector ? data : default', function () {
    for (var i = 0; i < selectors.length; i++) {
      selectors[i] ? 'data return' : 'default';
    }
  })
})
