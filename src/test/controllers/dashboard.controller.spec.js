'use strict';

describe('dashboard.controller', function() {

  var scope,
      cookieStore,
      userService;

  beforeEach(module('MasterPlan'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    cookieStore = $injector.get('$cookieStore');
    userService = $injector.get('User');
    spyOn(userService, 'authenticate');
  }));

  it('should have gravatarHash in scope if currentUser is set in cookie', inject(function($controller) {
    cookieStore.put('current_user', { gravatarHash: '12345' });
    $controller('DashboardCtrl', {
      $scope: scope,
      $cookieStore: cookieStore,
      User: userService
    });
    scope.$digest();
    expect(scope.gravatarHash).toBeDefined();
    expect(scope.gravatarHash).toEqual('12345');
  }));

  it('should call authenticate if currentUser is not set in cookie', inject(function($controller) {
    cookieStore.remove('current_user');
    $controller('DashboardCtrl', {
      $scope: scope,
      $cookieStore: cookieStore,
      User: userService
    });
    scope.$digest();
    expect(userService.authenticate).toHaveBeenCalled();
  }));
});
