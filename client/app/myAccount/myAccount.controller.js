'use strict';

angular.module('snckcoApp')
	.controller('MyAccountCtrl', function ($scope, $http, Auth, machineService) {

	$scope.hello = true;
	$scope.votes = true;
	$scope.account = true;
	$scope.feedback = true;
	$scope.getCurrentUser = Auth.getCurrentUser;
	$scope.getCurrentEmail = Auth.getCurrentUser;
	$scope.comment = "";
	$scope.myValue = true;
	$scope.inputValue = false;
	$scope.machineIdentification;

	$http.get('http://localhost:9000/api/machines').success(function(data) {
                $scope.machineIdentification = data;
     });

	/*for (var i = 0; i <= $scope.getCurrentMachines.machineIds.length; i++){
	$scope.getCurrentMachinesId = $scope.getCurrentMachines.machineIds[i];
	console.log($scope.getCurrentMachinesId);
	};*/


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

	$scope.thankYouCommentArray = [
	"You're killing it, thanks.", 
	"May the snck be with you.",
	"You're too sexy for your snck.",
	"Snck like nobody's watching.",
	"You're beautiful, thanks.",
	"Feedback is tight. Thank you.",
	"#sncksareback",
	"sncks are back",
	"Baby's got snck.",
	"Back in snck."];

	$scope.savedata = function () {
		$scope.myValue = false;
		$scope.inputValue = true;
		shuffleArray($scope.thankYouCommentArray);
		$scope.thankYous = $scope.thankYouCommentArray.slice(1);

		$scope.d = new Date();
		console.log($scope.d);
	

		$http.post('http://localhost:9000/api/contacts', {
	        name: $scope.getCurrentUser().name,
	        messageDate:$scope.d,
	        message: $scope.comment}).success(function(data){console.log("data-entry-made")
	    });
	};

	   
	});