(function () {
    'use strict';
  
    angular.module('gandhi').controller('RegisterController', registerController);
  
    function registerController ($scope) {
      var vm = this;
      
      vm.fields = {};
      vm.fields.isPerson = true;

      //vm.login = login;
      vm.register = register;
  
      function register() {
  
      }
    }
  
  })();
  