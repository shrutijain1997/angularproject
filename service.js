'use strict';

angular.module('nm.service', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/service', {
    templateUrl: 'login/service.html',
    controller: 'serviceCtrl'
  });
}])

.controller('serviceCtrl', [function() {

}]);
 
 