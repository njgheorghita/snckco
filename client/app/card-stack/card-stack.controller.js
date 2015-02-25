'use strict';

angular.module('snckcoApp')



.controller('Card-stackCtrl', function ($scope, $http, Auth, $location, $filter) {

        $scope.voteTally = 0; 

        var shuffleArray = function(array) {
              var m = array.length, t, i;
              // While there remain elements to shuffle
              while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
              }
              return array;
        };

        $http.get('/api/cards2s').success(function(data) {
            var userCards = Auth.getCurrentUser().cardnames;
            $scope.cardsFull = data;
                $scope.cards = _.where(data, function(card) {
                    return _.indexOf(userCards, card.name) === -1;
                });
                shuffleArray($scope.cards);
        });



        $scope.throwout = function (eventName, eventObject, $index) {
            $scope.getCurrentUser= Auth.getCurrentUser().name;
            $scope.voteTally ++;
            $scope.swipeYes = 0;
            $scope.swipeNo = 0;
            $scope.currentTotalSwipes = 0;
            if ($scope.voteTally == 3 && $scope.getCurrentUser == undefined){
                $location.path("/signup");
            };

            $scope.remove = function(array, index) {
                array.splice(index,1);
            };

            $scope.nameFood = $scope.cards[$index].name;

            if (eventObject.throwDirection == 1) {
                $scope.swipeYes = 1;
                $scope.currentTotalSwipes = _.pluck(_.where($scope.cardsFull, {'name' : $scope.nameFood}), 'swipeYes');
                $scope.currentTotalSwipes ++;

                $http.put('/api/cards2s/' + $scope.cards[$index]._id, {"name":$scope.nameFood, "swipeYes": $scope.currentTotalSwipes})
                    .success(function() {
                        var swipeYes = $scope.currentTotalSwipes;
                    })
                    .error(console.log('errorrrrr'));
            } else if (eventObject.throwDirection == -1) {
                $scope.swipeNo = 1;
                $scope.currentTotalSwipes = _.pluck(_.where($scope.cardsFull, {'name' : $scope.nameFood}), 'swipeNo');
                $scope.currentTotalSwipes ++;
                
                $http.put('/api/cards2s/' + $scope.cards[$index]._id, {"name":$scope.nameFood, "swipeNo": $scope.currentTotalSwipes})
                    .success(function() {
                        var swipeNo = $scope.currentTotalSwipes;
                    })
                    .error(console.log('errorrrrr'));
            };

            $scope.d = new Date();

            $http.post('/votes', {
                name: $scope.nameFood,
                swipeYes: $scope.swipeYes,
                swipeNo: $scope.swipeNo,
                timeanddate: $scope.d,
                userId: $scope.getCurrentUser }).success(function(data){
                    Auth.refresh();
            });

            for (var i=0; i < $scope.cards.length; i++){
                if ($scope.cards[i].name === $scope.nameFood) {
                    $scope.cards[i].swipeYes ++;
                }
            };

            $scope.swipeYes = 0;
            $scope.swipeNo = 0;
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


    })
;

