'use strict';

angular.module('MasterPlan')
  .directive('sidebar', function(){
    return {
      templateUrl: 'app/views/directives/sidebar.html',
      restrict: 'E'
    };
  });
