'use strict';

angular.module('snckcoApp')

.directive('myContinent', function () {
		return {
			restrict: 'E',
			template: '<div class="col-md-3"> <a class="btn col-md-12" ng-click="target=continentId" ng-class="{active : target == continentId}"><img</div>',
			scope: {
				continentId: '@',
				showdowns: '@',
				target: '='
			}
		};
	})

.controller('ShowdownCtrl', function ($scope, User) {

		$scope.showdowns = [
		'./../../assets/images/showdown1.jpg',
		'./../../assets/images/showdown2.jpg',
		'./../../assets/images/showdown3.png',
		'./../../assets/images/showdown4.jpg'
		];


		$scope.myDropDown = 'first';
		$scope.continent = 0;
		$scope.count = 0;
		
		

		$scope.apply = function($rootScope, count, continent) {
			$scope.count = $scope.continent;
			$rootScope.tally = $scope.count;
		}

		
	});



