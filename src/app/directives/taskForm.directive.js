'use strict';

angular.module('MasterPlan')
  .directive('taskForm', function(){
    return {
      templateUrl: 'app/views/directives/taskForm.html',
      restrict: 'E',
      scope: {
        task: '=',
        goals: '=',
        categories: '='
      },
      link: function(scope) {
        //current date today for minDate in datepicker
        scope.today = new Date();

        //pickedDate in datepicker
        scope.pickedDate = null;
        if(scope.task.deadline) scope.pickedDate = new Date(scope.task.deadline);

        //watch pickedDate for correct binding to task.deadline
        //which is a string
        scope.$watch('pickedDate', function(date){
          if(date){
            //Add 1 to date otherwise the date string will be the day before
            date.setDate(date.getDate() + 1);
            //Convert date object to string
            scope.task.deadline = date.toJSON().split('T')[0];
          } else {
            scope.task.deadline = date;
          }
        });

        scope.category_id = scope.task.category.id;
        if(scope.task.goal) scope.goal_id = scope.task.goal.id;

        scope.toggleDatepicker = function(task) {
          scope.datepickerOpen = !scope.datepickerOpen;
        };

        scope.clearDatepicker = function() {
          scope.pickedDate = null;
          scope.datepickerOpen = false;
        }
      }
    };
  });
