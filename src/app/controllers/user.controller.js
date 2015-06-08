'use strict';

angular.module('MasterPlan')
  .controller('UserCtrl', function($scope, $state, Restangular, User) {
    $scope.hasError = false;
    $scope.flash = {};
    $scope.user = {};

    $scope.signIn = function() {
      Restangular.all('users/sign_in').post({ user: $scope.user }).then(
        function(response) {
          User.setCurrentUser(response);
          $state.go('home.dashboard');
        },
        function(response) {
          User.removeCurrentUser();
          $scope.flash = response.data;
          $scope.hasError = true;
        }
      );
    };

  });

