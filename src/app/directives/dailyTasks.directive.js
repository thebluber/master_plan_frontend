'use strict';

angular.module('MasterPlan')
  .directive('dailyTasks', function(Task){
    return {
      templateUrl: 'app/views/directives/dailyTasks.html',
      restrict: 'E',
      link: function(scope) {
        scope.today = new Date();
        scope.$watch('today', function(date){
          scope.dateString = date.toJSON().split('T')[0];
          Task.tasksForDate(date).then(function(response){
            scope.dailyTasks = response;
          }, function(error) {
            console.log(error);
          });
        });
      }
    };
  });
