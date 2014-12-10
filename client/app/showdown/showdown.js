'use strict';

angular.module('snckcoApp')
    .config( function ($stateProvider) {
        $stateProvider  
            .state('showdown', {
            url: '/showdown',
            templateUrl: 'app/showdown/showdown.html',
            controller: 'ShowdownCtrl'
        });
    });