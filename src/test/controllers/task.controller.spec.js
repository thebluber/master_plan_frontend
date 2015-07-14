'use strict';

describe('task.controller', function() {

  var scope,
      httpBackend,
      restangular;

  beforeEach(module('MasterPlan'));
  beforeEach(module('app/views/home.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
  }));

  it('should get all tasks of the user', inject(function($controller) {
    $controller('TaskCtrl', {
      $scope: scope
    });
    httpBackend.expect('GET', '/api/v1/tasks').respond([]);
    httpBackend.flush();
  }));

});
