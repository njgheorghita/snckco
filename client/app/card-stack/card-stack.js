'use strict';

angular.module('snckcoApp')
    .config( function ($stateProvider) {
        $stateProvider  
            .state('card-stack', {
            url: '/card-stack',
            templateUrl: 'app/card-stack/index.html',
            controller: 'Card-stackCtrl'
        });
    });