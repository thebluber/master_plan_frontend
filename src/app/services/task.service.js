'use strict';

angular.module('MasterPlan')
  .service('Task', function Task (Restangular){
    var that = this;

    this.tasksForDate = function(date){
      return Restangular.one('tasks/for_date/' + stringifyDate(date)).get();
    };

    this.toggleForDate = function(task, date){
      if(task.done){
        //check task for the given date as undone
        return Restangular.one('tasks/' + task.id + '/uncheck_for_date/' + stringifyDate(date)).remove();
      } else {
        //check task for the given date as done
        return Restangular.one('tasks/' + task.id + '/check_for_date/' + stringifyDate(date)).post();
      }
    };

    //bring Date obj to yyyy-mm-dd format
    var stringifyDate = function(date) { return date.toJSON().split('T')[0]; };

  });
