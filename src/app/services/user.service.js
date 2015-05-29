'use strict';

angular.module('MasterPlan')
  .service('User', function User ($state, Restangular, $q) {
    this.currentUser = undefined;
    var that = this;

    this.setCurrentUser = function(user) {
      this.currentUser = user;
    };

    this.gravatarHash = function() {
      if(this.currentUser === undefined) {
        return '';
      } else {
        return CryptoJS.MD5(this.currentUser.email.trim().toLowerCase()).toString();
      }
    };

    this.authenticate = function() {
      var deferred = $q.defer();
      Restangular.one('session').get().then(
          function(user) {
            that.setCurrentUser(user);
            deferred.resolve();
          },
          function() {
            that.setCurrentUser(undefined);
            $state.go('signin');
          });
      return deferred.promise;
    };
  
  });
