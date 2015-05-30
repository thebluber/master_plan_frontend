'use strict';

angular.module('MasterPlan')
  .controller('DashboardCtrl', function($scope, User, $cookieStore) {
    if($cookieStore.get('current_user')) {
      $scope.gravatarHash = $cookieStore.get('current_user').gravatarHash;
    } else {
      User.authenticate();
    }
  });
