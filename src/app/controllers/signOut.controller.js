'use strict';

angular.module('MasterPlan')
  .controller('SignOutCtrl', function($state, Restangular, User) {
    Restangular.all('users/sign_out').remove().then(function(response) {
      User.removeCurrentUser();
      $state.go('signin');
    });
  });
