(function () {
  'use strict';

  angular.module('gandhi').controller('HomeController', homeController);

  function homeController ($scope, $location) {
    var vm = this;

    vm.isLogin = true;

    vm.login = login;
    vm.register = register;

    function login() {
      $location.path('/dashboard');
    }

    function register() {

    }
  }

})();
