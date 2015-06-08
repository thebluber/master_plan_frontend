'use strict';

angular.module('MasterPlan')
  .controller('HomeCtrl', function($state, User) {
    if(User.currentUser) {
      $state.go('home.dashboard');
    }
  });
