'use strict';

angular.module('nm.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  })
}])

 
.controller('loginCtrl', [function() {

}]);