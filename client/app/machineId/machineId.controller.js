'use strict';

angular.module('snckcoApp')
	.controller('MachineIdCtrl', function ($scope, $http, $location, Auth, machineService) {
	$scope.machineId = '';
	$scope.errorMessage = '';
	$scope.getCurrentUser = Auth.getCurrentUser();

	 $http.get('http://localhost:9000/api/machines').success(function(data) {
            $scope.machineIdentification = data;
    });




	$scope.submitButton = function() {
		console.log($scope.machineId);
		$scope.upperMachineId = $scope.machineId.toUpperCase();

		machineService.setSetId($scope.upperMachineId);


		
		for (var i = 0; i < $scope.machineIdentification.length; i++) {
			if ($scope.upperMachineId == $scope.machineIdentification[i].machineId) {
				if ($scope.getCurrentUser.name != undefined) { 
					console.log($scope.getCurrentUser.id,$scope.getCurrentUser._id);
					//this is where you need to push machineid to current user array if it doesn't match existing id
					//if it matches existing id, take you straight to home page
					console.log('doodoodooodooodoo');
					$http.put('http://localhost:9000/api/users/api/' + $scope.getCurrentUser._id + '/addMachine', {machineId: $scope.upperMachineId})
					.success(function() {
						// refresh the locally cached user
						Auth.refresh();
					});
				}else {
					//machine id is saved in service & you have to extract it later
				}
				$location.path("/card-stack");
				break;
			} else {
				$scope.machineId = '';
				$scope.errorMessage = "that's not right";
			}
		};
	};
	});