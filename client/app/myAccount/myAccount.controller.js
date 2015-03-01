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

	$http.get('/api/machines').success(function(data) {
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
	"We predict free sncks in your future",
	"#sncksareback",
	"eat mor sncks",
	"Baby's got snck."];

	$scope.savedata = function () {
		$scope.myValue = false;
		$scope.inputValue = true;
		shuffleArray($scope.thankYouCommentArray);
		$scope.thankYous = $scope.thankYouCommentArray.slice(1);

		$scope.d = new Date();
		console.log($scope.d);
	

		$http.post('/api/contacts', {
	        name: $scope.getCurrentUser().name,
	        messageDate:$scope.d,
	        message: $scope.comment}).success(function(data){console.log("data-entry-made")
	    });
	};

	$scope.itemChosen = true;
	$scope.snckWeekVote = '';

	$scope.snckButton = function () {
		$scope.votes = !($scope.votes);
		console.log($scope.getCurrentUser().snckOfTheWeek.length);
		if ($scope.getCurrentUser().snckOfTheWeek.length >= 1){
			$scope.submitted = true;
		} else {
			$scope.submitted = false;
		}
	};

	$scope.selectOne= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'milkOreo';
		$scope.chooseOne = !($scope.chooseOne);
		if ($scope.chooseTwo = true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseThree = true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseFour = true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectTwo= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'milkPattie';
		$scope.chooseTwo = !($scope.chooseTwo);
		if ($scope.chooseOne = true) {
			$scope.chooseOne = false;
		}
		if ($scope.chooseThree = true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseFour = true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectThree= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'hungryMonkeyWedding';
		$scope.chooseThree = !($scope.chooseThree);
		if ($scope.chooseTwo = true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseOne = true) {
			$scope.chooseOne = false;
		}
		if ($scope.chooseFour = true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectFour= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'hungryMonkeyBad';
		$scope.chooseFour = !($scope.chooseFour);
		if ($scope.chooseTwo = true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseThree = true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseOne = true) {
			$scope.chooseOne = false;
		}
	};
	$scope.submitSnck = function() {
		console.log($scope.getCurrentUser().snckOfTheWeek);
		$scope.submitted=!($scope.submitted);
		//put vote in snckOfTheWeek
		$http.put('/api/users/api/'+ $scope.getCurrentUser()._id +'/snckOfTheWeek', {snckOfTheWeek: $scope.snckWeekVote})
		.success(function() {
					// refresh the locally cached user
					Auth.refresh();
				});
	};
	   
	});