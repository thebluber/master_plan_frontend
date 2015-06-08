'use strict';

angular.module('MasterPlan')
  .directive('navbar', function($cookieStore, User){
    return {
      templateUrl: 'app/views/directives/navbar.html',
      restrict: 'E',
      link: function(scope) {

        scope.$watch(function() { return $cookieStore.get('current_user'); }, function(user) {
          if(user) {
            scope.user = $cookieStore.get('current_user').email;
            scope.gravatarHash = $cookieStore.get('current_user').gravatarHash;
          }else {
            User.authenticate();
          }

        }, true);
      }
    };
  });
