'use strict';

angular.module('MasterPlan')
  .controller('MainCtrl', function ($state, User) {
    if(User.sessionData) {
      $state.go('dashboard');
    }
  });
