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
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      }).state('signin', {
        url: '/sign_in'
      })

  })
;
