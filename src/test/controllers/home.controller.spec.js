'use strict';

describe('home.controller', function(){

  beforeEach(module('MasterPlan'));

  beforeEach(inject(function($injector) {
    state = $injector.get('$state');
  }));

  it('should do something', inject(function($controller) {
    $controller('HomeCtrl', {
    });

  }));
});
