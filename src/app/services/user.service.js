'use strict';

angular.module('MasterPlan')
  .service('User', function User ($state, Restangular, $q) {
    this.currentUser = undefined;
    var that = this;

    this.authenticate = function() {
      var deferred = $q.defer();
      Restangular.one('session').get().then(
          function(user) {
            that.currentUser = user;
            deferred.resolve();
          },
          function(error) {
            that.currentUser = undefined;
            $state.go('signin');
          });
      return deferred.promise;
    };
  
  });
