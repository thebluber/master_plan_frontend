'use strict';

describe('main.controller', function(){
  var state;

  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function($injector) {
    state = $injector.get('$state');
  }));

  it('should go to /dashboard if user is signed in', inject(function($controller) {
    $controller('MainCtrl', {
      User: { sessionData: '' },
      $state: state
    });
    state.expectTransitionTo('dashboard');

  }));
});
