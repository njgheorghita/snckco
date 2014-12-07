'use strict';

angular.module('snckcoApp')

.controller('Card-stackCtrl', function ($scope) {
        $scope.cards = [
         './../../assets/images/banana.jpg',
         './../../assets/images/bagel.jpg',
         './../../assets/images/cheesePbCrackers.jpg',
         './../../assets/images/clifBuildersBar.jpg.jpg',
         './../../assets/images/crunchBar.jpg',
         './../../assets/images/doritosNachoCheese.jpg',
         './../../assets/images/famousAmos.jpg',
         './../../assets/images/fruitySnacks.jpg',
         './../../assets/images/gardettos.jpg',
         './../../assets/images/hersheysAlmonds.jpg',
         './../../assets/images/hundredCalOreos.jpg',
         './../../assets/images/laysBbqChips.jpg',
         './../../assets/images/lifeSaversFruity.jpg',
         './../../assets/images/lifeSaversMint.jpg',
         './../../assets/images/m&msPlain.jpg',
         './../../assets/images/mentosMint.jpg',
         './../../assets/images/natureValleyOatshoney.jpg',
         './../../assets/images/plantersPeanuts.jpg',
         './../../assets/images/popcornersKettle.jpg',
         './../../assets/images/popTartBrownSugarCinnamon.jpg',
         './../../assets/images/popTartHotFudgeSundae.jpg',
         './../../assets/images/reesesPbCups.jpg',
         './../../assets/images/riceKrispieTreat.jpg',
         './../../assets/images/roldGoldPretzelsTinyTwist.jpg',
         './../../assets/images/skittles.jpg',
         './../../assets/images/skittlesWildBerry.jpg',
         './../../assets/images/snickers.jpg',
         './../../assets/images/snydersHoneyMustardPieces.jpg',
         './../../assets/images/threeMuskateers.jpg',
         './../../assets/images/trailMix.jpg',
         './../../assets/images/twix.jpg',
         './../../assets/images/zooCrackers.jpg'
        ];

        $scope.throwout = function (eventName, eventObject) {
            console.log('throwout', eventObject);
        };

        $scope.throwoutleft = function (eventName, eventObject) {
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

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);
        };

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
    });
