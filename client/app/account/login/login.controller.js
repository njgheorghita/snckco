'use strict';

angular.module('snckcoApp')
  .controller('LoginCtrl', ["$scope", "Auth", "$location", function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/myaccount');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.fbLogin = function() {
      console.log("fadsfadfs");
      Auth.fblogin()
      .then(function(asdf){
        console.log(asdf,"afsda");
      })
      .catch(function(err){
        console.log('error=');
        console.error(err);
      })
    };
  }]);
