'use strict';

describe('SignOut.controller', function() {
  var scope,
      state,
      restangular,
      user,
      httpBackend;

  beforeEach(module('MasterPlan'));
  beforeEach(module('stateMock'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
    state = $injector.get('$state');
    restangular = $injector.get('Restangular');
    user = $injector.get('User');
    spyOn(user, 'removeCurrentUser');
  }));

  it('should sign out user', inject(function($controller) {
    $controller('SignOutCtrl', {
      $scope: scope,
      $state: state,
      User: user,
      Restangular: restangular
    });
    httpBackend.expect('DELETE', '/api/v1/users/sign_out').respond(200);
    state.expectTransitionTo('signin');

    httpBackend.flush();
    expect(user.removeCurrentUser).toHaveBeenCalled();

  }));

});
