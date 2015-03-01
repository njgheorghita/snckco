'use strict';

angular.module('snckcoApp')
	.controller('MachineIdCtrl', ["$scope", "$http", "$location", "Auth", "machineService", function ($scope, $http, $location, Auth, machineService) {
	$scope.machineId = '';
	$scope.errorMessage = '';
	$scope.getCurrentUser = Auth.getCurrentUser();

	 $http.get('/api/machines').success(function(data) {
            $scope.machineIdentification = data;
    });




	$scope.submitButton = function() {
		$scope.upperMachineId = $scope.machineId.toUpperCase();

		machineService.setSetId($scope.upperMachineId);

		for (var i = 0; i < $scope.machineIdentification.length; i++) {

			if ($scope.machineIdentification[i].machineId == $scope.upperMachineId) {

				if ($scope.getCurrentUser.name != undefined) {

					if ($scope.getCurrentUser.machineIds == $scope.upperMachineId) {
						$scope.errorMessageId = "You've already registered that machine";
						break;
					} else {
						$http.put('/api/users/api/' + $scope.getCurrentUser._id + '/addMachine', {machineId: $scope.upperMachineId})
						.success(function() {
							// refresh the locally cached user
							Auth.refresh();
						});
						$location.path('/card-stack');
						break;
					}
				}else{
					$location.path('/signup');
				}
			} else {
				$scope.errorMessageId = "that's not right";
			}
		};
		$scope.machineId = '';
		$scope.errorMessage = $scope.errorMessageId;
	};
}]);