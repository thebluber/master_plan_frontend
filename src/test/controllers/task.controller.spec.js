'use strict';

describe('task.controller', function() {

  var scope,
      httpBackend,
      cookies;

  beforeEach(module('MasterPlan'));
  beforeEach(module('app/views/home.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
    cookies = $injector.get('$cookieStore');
    spyOn(cookies, 'get').and.returnValue({});
  }));

  it('should get all tasks of the user', inject(function($controller) {
    $controller('TaskCtrl', {
      $scope: scope
    });
    console.log(cookies.get('tasks'));
    httpBackend.expect('GET', '/api/v1/tasks').respond([{ category: {id: 1, name: 'work'}, deadline: '2015-07-15' }]);
    httpBackend.flush();
    expect(scope.tasks).toBeDefined();

  }));

  it('should have user in scope from cookies', inject(function($controller) {
    $controller('TaskCtrl', {
      $scope: scope
    });
    httpBackend.expect('GET', '/api/v1/tasks').respond([]);
    httpBackend.flush();
    expect(cookies.get).toHaveBeenCalled();
    expect(scope.user).toEqual({});
  }));

});
