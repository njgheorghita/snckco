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
		$scope.machineCount =0;

		machineService.setSetId($scope.upperMachineId);
//ATTENTION THIS IS STILL ONLY BUILT TO HANDLE ONE MACHINE PER USER
//"YOU'VE ALREADY REGISTERED THAT MACHINE" ONLY WORKS IF USER KNOWS/USES MAX ONE CODE
		for (var i = 0; i < $scope.machineIdentification.length; i++) {

			if ($scope.machineIdentification[i].machineId == $scope.upperMachineId) {

				if ($scope.getCurrentUser.name != undefined) {

					if ($scope.getCurrentUser.machineIds == $scope.upperMachineId) {
						$scope.errorMessageIdOne = "You've already registered that machine";
						break;
					} else {
						$http.put('/api/users/api/' + $scope.getCurrentUser._id + '/addMachine', {machineId: $scope.upperMachineId})
						.success(function() {
							// refresh the locally cached user
							Auth.refresh();
						});
						$location.path('/myaccount');
						break;
					}
				}else{
					$location.path('/signup');
				}
			} else {
				$scope.errorMessageIdTwo = "that's not right";
				$scope.machineCount ++;
			}
		};
		$scope.machineId = '';
		//two errormessageId's so that we don't get wrongful error messages displaying during page transition
		$scope.errorMessage = $scope.errorMessageIdOne;
		if ($scope.machineCount == $scope.machineIdentification.length){
			$scope.errorMessage = $scope.errorMessageIdTwo;
		}

	};
}]);