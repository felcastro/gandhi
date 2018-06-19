(function () {
  'use strict';

  angular.module('gandhi').controller('BaseController', baseController);

  function baseController ($scope) {
    var vm = this;
    
    $scope.baseCurrYear = (new Date()).getFullYear();
  }

})();
