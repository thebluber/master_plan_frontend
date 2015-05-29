'use strict';

angular.module('MasterPlan')
  .controller('DashboardCtrl', function($scope, User) {
    $scope.gravatarHash = User.gravatarHash;
  });
