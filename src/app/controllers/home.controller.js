'use strict';

angular.module('MasterPlan')
  .controller('HomeCtrl', function($state) {
    $state.go('home.dashboard');
  });
