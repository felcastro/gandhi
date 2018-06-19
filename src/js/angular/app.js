(function () {
  'use strict';

  angular
    .module('gandhi', [
      'templates',
      'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: 'public/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .when('/about', {
          templateUrl: 'public/about.html'
        })
        .when('/register', {
          templateUrl: 'public/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
        })
        .otherwise('/');
    });

})();
