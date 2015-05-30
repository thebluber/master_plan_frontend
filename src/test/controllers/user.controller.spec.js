'use strict';

describe('user.controller', function() {
  var scope,
      state,
      httpBackend,
      user;

  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    scope.user = {};
    state = $injector.get('$state');
    httpBackend = $injector.get('$httpBackend');

    user = {
      setCurrentUser: function(data) {},
      removeCurrentUser: function() {}
    }
    spyOn(user, 'setCurrentUser');
    spyOn(user, 'removeCurrentUser');
  }));

  it('should sign in user', inject(function($controller) {
    $controller('UserCtrl', {
      $scope: scope,
      $state: state,
      User: user
    });

    expect(scope.user).toBeDefined();
    expect(scope.signIn).toBeDefined();
    httpBackend.expect('POST', '/api/v1/users/sign_in').respond({ email: 'user@test.de' });
    state.expectTransitionTo('dashboard');

    scope.signIn();
    httpBackend.flush();

    expect(user.setCurrentUser).toHaveBeenCalled();
  }));

  it('should set flash notice if sign in fails', inject(function($controller) {
    $controller('UserCtrl', {
      $scope: scope,
      $state: state,
      User: user
    });

    expect(scope.flash).toBeDefined();
    httpBackend.expect('POST', '/api/v1/users/sign_in').respond(401, { error: '' });

    scope.signIn();
    httpBackend.flush();

    expect(scope.flash).toEqual({ error: '' });
    expect(scope.hasError).toBe(true);
    expect(user.removeCurrentUser).toHaveBeenCalled();
  }));
});
