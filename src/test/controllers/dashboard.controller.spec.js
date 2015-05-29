'use strict';

describe('dashboard.controller', function() {

  var scope,
      userService;

  beforeEach(module('MasterPlan'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    userService = $injector.get('User');
    spyOn(userService, 'gravatarHash').and.returnValue('12345');
  }));

  it('should have gravatarHash as function in scope', inject(function($controller) {
    $controller('DashboardCtrl', {
      $scope: scope,
      User: userService
    });
    expect(scope.gravatarHash).toBeDefined();
    expect(scope.gravatarHash()).toEqual('12345');
    expect(userService.gravatarHash).toHaveBeenCalled();
  }));
});
