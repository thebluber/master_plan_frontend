'use strict';

angular.module('MasterPlan')
  .controller('TaskCtrl', function($scope, Restangular) {
    Restangular.all('tasks').getList().then(function(response){
      $scope.tasks = response;
    }, function(error){
      console.log(error);
    });
  });
