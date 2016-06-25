(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('MainController', MainController);

  function MainController($http) {
    var vm = this;

    $http.get('http://localhost:9000/fonts')
      .then(function($response) {
        vm.fontsList = $response.data;
      }, function($error) {
        alert('Error:', $error);
      });
  }

})();
