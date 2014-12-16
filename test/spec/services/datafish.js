'use strict';

describe('Service: dataFish', function () {

  // load the service's module
  beforeEach(module('snckcoApp'));

  // instantiate service
  var dataFish;
  beforeEach(inject(function (_dataFish_) {
    dataFish = _dataFish_;
  }));

  it('should do something', function () {
    expect(!!dataFish).toBe(true);
  });

});
