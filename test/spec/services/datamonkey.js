'use strict';

describe('Service: dataMonkey', function () {

  // load the service's module
  beforeEach(module('snckcoApp'));

  // instantiate service
  var dataMonkey;
  beforeEach(inject(function (_dataMonkey_) {
    dataMonkey = _dataMonkey_;
  }));

  it('should do something', function () {
    expect(!!dataMonkey).toBe(true);
  });

});
