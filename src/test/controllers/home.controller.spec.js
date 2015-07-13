'use strict';

describe('home.controller', function(){

  var state;
  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function($injector) {
    state = $injector.get('$state');
  }));

  it('should go to dashboard', inject(function($controller) {
    state.expectTransitionTo('home.dashboard');
    $controller('HomeCtrl', {
      $state: state
    });
  }));
});
