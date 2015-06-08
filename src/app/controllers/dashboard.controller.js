'use strict';

angular.module('MasterPlan')
  .controller('DashboardCtrl', function($scope, User, $cookieStore) {
    $scope.$watch(function() { return $cookieStore.get('current_user'); }, function(user) {
      if(user) {
        $scope.gravatarHash = $cookieStore.get('current_user').gravatarHash;
      }else {
        User.authenticate();
      }

    }, true);
  });
