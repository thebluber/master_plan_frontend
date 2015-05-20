'use strict';

angular.module('MasterPlan')
  .controller('MainCtrl', function ($state, User) {
    if(User.currentUser) {
      $state.go('dashboard');
    }
  });
