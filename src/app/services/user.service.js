'use strict';

angular.module('MasterPlan')
  .service('User', function User ($state, Restangular, $q) {
    this.sessionData = undefined;
    var that = this;

    this.authenticate = function() {
      var deferred = $q.defer();
      Restangular.one('session').get().then(
          function(data) {
            that.sessionData = data;
            deferred.resolve();
          },
          function(error) {
            that.sessionData = undefined;
            $state.go('signin');
          });
      return deferred.promise;
    };
  
  });
