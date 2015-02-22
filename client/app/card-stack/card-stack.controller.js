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
                $scope.cards = _.where(data, function(card) {
                    return _.indexOf(userCards, card.name) === -1;
                });
                shuffleArray($scope.cards);
        });



        $scope.throwout = function (eventName, eventObject) {
            console.log('throwout', eventObject);

            $scope.getCurrentUser= Auth.getCurrentUser().name;
            $scope.voteTally ++;
            $scope.swipeYes = 0;
            $scope.swipeNo = 0;
            console.log('bigtesthere', $scope.cardsFilter);
            if ($scope.voteTally == 3 && $scope.getCurrentUser == undefined){
                $location.path("/signup");
            };

            if (eventObject.throwDirection == 1) {
                $scope.swipeYes = 1;
            } else if (eventObject.throwDirection == -1) {
                $scope.swipeNo = 1;
            };

            $scope.nameFood = '';

            $scope.remove = function(array, index) {
                array.splice(index,1);
            };

            if (eventObject.target.outerText.indexOf("Banana") > -1) {
                $scope.nameFood = 'banana';
            } else if (eventObject.target.outerText.indexOf("Cookies") > -1) {
                $scope.nameFood = 'cookies';
            } else if (eventObject.target.outerText.indexOf("Apple") > -1) {
                $scope.nameFood = 'apple';
            } else if (eventObject.target.outerText.indexOf("Bagel") > -1) {
                $scope.nameFood = 'bagel';
            } else if (eventObject.target.outerText.indexOf("Pattie") > -1) {
                $scope.nameFood = 'milkPattie';
            } else if (eventObject.target.outerText.indexOf("Oreo") > -1) {
                $scope.nameFood = 'milkOreo';
            } else if (eventObject.target.outerText.indexOf("Truffle") > -1) {
                $scope.nameFood = 'darkTruffle';
            } else if (eventObject.target.outerText.indexOf("Boys") > -1) {
                $scope.nameFood = 'hungryMonkeyBad';
            } else if (eventObject.target.outerText.indexOf("Wedding") > -1) {
                $scope.nameFood = 'hungryMonkeyWedding';
            };

            console.log($scope.nameFood, Auth.getCurrentUser().name);
            $scope.d = new Date();


            $http.post('/votes', {
                name: $scope.nameFood,
                swipeYes: $scope.swipeYes,
                swipeNo: $scope.swipeNo,
                timeanddate: $scope.d,
                userId: $scope.getCurrentUser }).success(function(data){
                    console.log("data-entry-made");
                    Auth.refresh();
            });

            for (var i=0; i < $scope.cards.length; i++){
                if ($scope.cards[i].name === $scope.nameFood) {
                    console.log($scope.nameFood);
                    $scope.cards[i].swipeYes ++;
                    console.log($scope.cards[i].swipeYes);
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

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);
        };
        
        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
    })
;

