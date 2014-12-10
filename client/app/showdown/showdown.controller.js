'use strict';

angular.module('snckcoApp')

	.controller('ShowdownCtrl', function ($scope) {
		$scope.showdowns = [
		'./../../assets/images/showdown1.jpg',
		'./../../assets/images/showdown2.jpg',
		'./../../assets/images/showdown3.png',
		'./../../assets/images/showdown4.jpg'
		]

		$scope.toggle = function (vote) {
			vote.selected = !vote.selected;
		};


	});


