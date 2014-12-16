'use strict';

angular.module('snckcoApp')

.directive('myContinents', function () {
		return {
			restrict: 'E',
			template: '<div class="col-md-3"><a class="btn col-md-12" style="background-image: url(pathway);" ng-click="target=continentId" ng-class="{active : target == continentId}"></div>',
			scope: {
				continentId: '@',
				showdowns: '@',
				pathway: '=',
				target: '='
			}
		};
	})

.controller('ShowdownCtrl', function ($scope, $http, User, myContinents) {

		$http.get('./../../assets/data/card-stack.json').then(function(data) {
			$scope.languages = data;
		});

		$scope.myDropDown = 'first';
		$scope.continent = 0;
		$scope.count = 0;
	


		$scope.apply = function(count, continent) {
			$scope.count = $scope.continent;
		}
		
	});



