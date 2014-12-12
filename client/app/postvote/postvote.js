'use strict';

angular.module('snckcoApp')
	.config( function ($stateProvider) {
		$stateProvider
			.state('postvote', {
			url: '/postvote',
			templateUrl: 'app/postvote/postvote.html',
			controller: 'PostvoteCtrl'
			});
	});