'use strict';

angular.module('snckcoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myAccount', {
        url: '/myaccount',
        templateUrl: 'app/myAccount/myAccount.html',
        controller: 'MyAccountCtrl'
      });
  });