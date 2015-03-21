'use strict';

angular.module('snckcoApp')
  .controller('SignupCtrl', ["$scope","Auth","$location", function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    $scope.booyah = false;
    $scope.booyahOne = false;
    $scope.emailPreference = "";
    $scope.emailPrefSelected = false;
    $scope.emailCommunicate = false;
    $scope.testCurrentMachine = "";
    $scope.loginIndicatorSignup = false;

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid && ($scope.emailPrefSelected == true)) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          emailPreference: $scope.emailPreference
//this is where we push first machineID    machineIds: $scope.testCurrentMachine
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/myaccount');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      } else {
        $scope.emailCommunicate = true;
      }
      
    };

    $scope.noEmails = function (){
      $scope.booyah = !($scope.booyah);
      $scope.emailPrefSelected = true;
      $scope.emailPreference = "false";
        if ($scope.booyahOne == true){
          $scope.booyahOne = false;
        } else if ($scope.booyah == false) {
          $scope.emailPrefSelected = false;
        }
    };

    $scope.yesEmails = function (){
      $scope.emailPreference = "true";
      $scope.booyahOne = !($scope.booyahOne);
      $scope.emailPrefSelected = true;

        if ($scope.booyah == true){
          $scope.booyah = false;
        }else if ($scope.booyahOne == false) {
          $scope.emailPrefSelected = false;
        }
    };

  }]);
