'use strict';

angular.module('MasterPlan')
  .service('User', function User ($state, Restangular, $q, $cookieStore) {
    var that = this;

    this.gravatarHash = function(email) {
      return CryptoJS.MD5(email.trim().toLowerCase()).toString();
    };

    this.setCurrentUser = function(user) {
      $cookieStore.put('current_user', { email: user.email, gravatarHash: this.gravatarHash(user.email), goals: user.goals, categories: user.categories });
    };

    this.removeCurrentUser = function() {
      $cookieStore.remove('current_user');
    };

    this.authenticate = function() {
      var deferred = $q.defer();
      Restangular.one('session').get().then(
          function(user) {
            that.setCurrentUser(user);
            deferred.resolve();
          },
          function() {
            that.removeCurrentUser();
            $state.go('signin');
          });
      return deferred.promise;
    };
  
  });
