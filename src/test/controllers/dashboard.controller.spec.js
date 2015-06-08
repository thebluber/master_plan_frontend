'use strict';

describe('dashboard.controller', function() {

  var scope;

  beforeEach(module('MasterPlan'));
  beforeEach(module('app/views/home.html'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
  }));

  it('should do something', inject(function($controller) {
    $controller('DashboardCtrl', {
      $scope: scope
    });
  }));

});
