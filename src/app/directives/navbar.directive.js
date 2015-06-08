'use strict';

angular.module('MasterPlan')
  .directive('navbar', function(){
    return {
      templateUrl: 'app/views/directives/navbar.html',
      restrict: 'E'
    };
  });
