'use strict';

angular.module('snckcoApp')

.service('myService', function () {
    var x='';
    return {
        getX : function () {
            return x;
        }
    };
})

.controller('Card-stackCtrl', function ($scope, $http, myService) {
        $http.get('./../../assets/data/card-stack.json').success(function(data) {
                $scope.cards = data;
        });

        $scope.throwout = function (eventName, eventObject) {
            console.log('throwout', eventObject);
        };

        $scope.throwoutleft = function (eventName, eventObject, $scope) {
            console.log('throwoutleft', eventObject);
        };

        $scope.throwoutright = function (eventName, eventObject) {
            console.log('throwoutright', eventObject);
        };

        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

            $scope.leftside= {'border-color': $scope.sample};
        

          $scope.sample = '';

        $scope.dragmove = function (eventName, eventObject, $scope) {
            console.log('dragmove', eventObject);

            
           
             //$scope.leftside = { 'border-left-color': $scope.getColor };
            
        };

        

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
    })
;

