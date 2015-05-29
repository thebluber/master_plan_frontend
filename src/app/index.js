'use strict';

angular.module('MasterPlan', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.bootstrap'
]).config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '',
        controller: 'MainCtrl',
        resolve: {
          resolver: function(User) { return User.authenticate(); }
        }
      }).state('signin', {
        url: '/sign_in',
        templateUrl: 'app/views/sign_in.html',
        controller: 'UserCtrl'
      }).state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'app/views/dashboard.html'
      });

  })
;
