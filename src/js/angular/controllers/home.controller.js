(function () {
  'use strict';

  angular.module('gandhi').controller('HomeController', homeController);

  function homeController ($scope) {
    var vm = this;

    vm.isLogin = true;

    vm.login = login;
    vm.register = register;

    function login() {

    }

    function register() {

    }
  }

})();
