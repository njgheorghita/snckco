'use strict';

angular.module('snckcoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('machineId', {
        url: '/',
        templateUrl: 'app/machineId/machineId.html',
        controller: 'MachineIdCtrl'
      });
  });