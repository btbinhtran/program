var program = 'undefined' == typeof window
  ? require('..')
  : require('tower-program'); // how to do this better?

var assert = require('assert');

describe('program', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});