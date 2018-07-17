'use strict';

// Declare app level module which depends on views, and components
angular.module('nm', [
  'ngRoute',
  'nm.login',
  'nm.myclient',
  'nm.service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  })
}]);

(function () {

    angular.module('app', []);
    angular.module('app').controller("WizardController", [wizardController]);

    function wizardController() {
        var vm = this;
        
        //Model
        vm.currentStep = 1;
        vm.steps = [
          {
            step: 1,
            name: "First step",
            template: "step1.html"
          },
          {
            step: 2,
            name: "Second step",
            template: "step2.html"
          },   
          {
            step: 3,
            name: "Third step",
            template: "step3.html"
          },             
        ];
        vm.user = {};
        
        //Functions
        vm.gotoStep = function(newStep) {
          vm.currentStep = newStep;
        }
        
        vm.getStepTemplate = function(){
          for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].template;
                }
            }
        }
        
        vm.save = function() {
          alert(
            "Saving form... \n\n" + 
            "Name: " + vm.user.name + "\n" + 
            "Email: " + vm.user.email + "\n" + 
            "Age: " + vm.user.age);
        }
    }
    
})();