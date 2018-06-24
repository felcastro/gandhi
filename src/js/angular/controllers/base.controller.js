(function () {
  'use strict';

  angular.module('gandhi').controller('BaseController', baseController);

  function baseController ($scope, $location) {
    var vm = this;

    $scope.baseIsLogged = ($location.path() == "/dashboard") ? true : false; 

    $scope.baseCurrYear = (new Date()).getFullYear();

    $scope.$on('$routeChangeStart', function($event, next, current) { 
      $scope.baseIsLogged = ($location.path() == "/dashboard") ? true : false;
    });
  }

})();
