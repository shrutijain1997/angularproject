'use strict';

angular.module('nm.myclient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myclient', {
    templateUrl: 'login/myclient.html',
    controller: 'myclientCtrl'
  });
}])

.controller('myclientCtrl', ['$scope', '$http', function($scope,$http) {
    $scope.formSubmit = function(data) {
	    $http({
	      method  : 'POST',
	      url     : 'http://127.0.0.1:3000/addmyclient',
	      data    : data,
	      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
	     })
	      .then(function(data) {
	        if (data) {
	          $scope.userdata = data;
	          $scope.message = data.message;
	        }
	      });
    };


}]);

