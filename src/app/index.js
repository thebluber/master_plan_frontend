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
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl'
      }).state('home.dashboard', {
        url: 'dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'app/views/dashboard.html'
      }).state('signin', {
        url: '/sign_in',
        templateUrl: 'app/views/sign_in.html',
        controller: 'UserCtrl'
      }).state('signout', {
        url: '/sign_out',
        controller: 'SignOutCtrl'
      });

  })
;
