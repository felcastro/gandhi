(function () {
    'use strict';
  
    angular.module('gandhi').controller('DashboardController', dashboardController);
  
    function dashboardController ($scope, $location) {
      var vm = this;
      
      vm.fields = {};
    }
  
})();
  