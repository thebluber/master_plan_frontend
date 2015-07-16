'use strict';

angular.module('MasterPlan')
  .controller('TaskCtrl', function($scope, Restangular, $cookieStore) {
    $scope.user = $cookieStore.get('current_user');
    Restangular.all('tasks').getList().then(function(response){
      $scope.tasks = _.map(response, function(task) {
        task.deadline = new Date(task.deadline);
        task.category_id = task.category.id;
        if(task.goal) task.goal_id = task.goal.id;
        return task
      });
    }, function(error){
      console.log(error);
    });
  });
