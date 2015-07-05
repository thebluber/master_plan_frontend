'use strict';

angular.module('MasterPlan')
  .service('Task', function Task (Restangular){
    var that = this;

    this.tasksForDate = function(date){
      //bring Date obj to yyyy-mm-dd format
      date = date.toJSON().split('T')[0];
      return Restangular.one('tasks/for_date/' + date).get();
    };
  });
