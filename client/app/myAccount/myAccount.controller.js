'use strict';

angular.module('snckcoApp')
	.controller('MyAccountCtrl', ["$scope","$http","Auth","machineService", function ($scope, $http, Auth, machineService) {

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
	$scope.pooper = false;
	$scope.resultsIndicator = false;

	$http.get('/api/machines').success(function(data) {
                $scope.machineIdentification = data;
     });

	$scope.sotwArray = [
		{
			'name':"Annedore's Milk Chocolate Oreo",
			'local': "yes",
			'description':"Delicious milk chocolate covered oreo",
			'price':"$1.50",
			'urlName':"milkOreo"
		},
		{
			'name':"Banana",
			'local': "no",
			'description':"I'm a banana!",
			'price':"0.50",
			'urlName':"banana"
		},
		{
			'name':"Baby Bottle Pop:Blue Raspberry",
			'local': "no",
			'description':"Healthy nutrition for babies since 1998.",
			'price':"1.50",
			'urlName':"babyBottleBery"
		},
		{
			'name':"Hungry Monkey Party Bites, Bad Boys",
			'local': "yes",
			'description':"Quart of delicious garlic, onion and poppin' corn.",
			'price':"2.25",
			'urlName':"hungryMonkeyBad"
		}
	];

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
			$http.get('/api/cards2s').success(function(data) {
			$scope.sotwCount = data;
		});

	$scope.menuItemBackground = false;


	$scope.snckButton = function () {
		$scope.votes = !($scope.votes);
		$scope.menuItemBackground = !($scope.menuItemBackground);
	//get sotw vote counts


    $scope.currentSotwOne = _.pluck(_.where($scope.sotwCount, {'name' : 'milkOreo'}), "snackOfTheWeek");
    $scope.currentSotwTwo = _.pluck(_.where($scope.sotwCount, {"name" : "scratchCookie"}), "snackOfTheWeek");
    $scope.currentSotwThree = _.pluck(_.where($scope.sotwCount, {'name' : 'toblerone'}), "snackOfTheWeek");
    $scope.currentSotwFour = _.pluck(_.where($scope.sotwCount, {'name' : 'hungryMonkeyWedding'}), "snackOfTheWeek");
    $scope.valueSotwOne = $scope.currentSotwOne[0];
    $scope.valueSotwTwo = $scope.currentSotwTwo[0];
    $scope.valueSotwThree = $scope.currentSotwThree[0];
    $scope.valueSotwFour = $scope.currentSotwFour[0];

    //set card id to match corresponding cards2s schema 
    $scope.idOne = _.pluck(_.where($scope.sotwCount, {'name' : 'milkOreo'}), '_id');
    $scope.idTwo = _.pluck(_.where($scope.sotwCount, {'name' : "scratchCookie"}), '_id');
    $scope.idThree = _.pluck(_.where($scope.sotwCount, {'name' : 'toblerone'}), '_id');
    $scope.idFour = _.pluck(_.where($scope.sotwCount, {'name' : 'hungryMonkeyWedding'}), '_id');
    $scope.valueIdOne = $scope.idOne[0];
    $scope.valueIdTwo = $scope.idTwo[0];
    $scope.valueIdThree = $scope.idThree[0];
    $scope.valueIdFour = $scope.idFour[0];

    //if ya aint first your last indicator setup
    $scope.lastOne = false;
    $scope.lastTwo = false;
    $scope.lastThree = false;
    $scope.lastFour = false;
    $scope.resultsArray = [$scope.valueSotwOne, $scope.valueSotwTwo, $scope.valueSotwThree, $scope.valueSotwFour];



    if ($scope.getCurrentUser().snckOfTheWeek.length >= 1){
    	$scope.resultsIndicator = !($scope.resultsIndicator);
		if (_.max($scope.resultsArray) == $scope.valueSotwOne){
    		$scope.lastTwo = true;
    		$scope.lastThree = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwTwo){
    		$scope.lastOne = true;
    		$scope.lastThree = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwThree){
    		$scope.lastOne = true;
    		$scope.lastTwo = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwFour){
    		$scope.lastOne = true;
    		$scope.lastTwo = true;
    		$scope.lastThree = true;
    	}
		} else {
			$scope.resultsIndicator = false;
		}

	};

	$scope.selectOne= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'milkOreo';
		$scope.currentSnackTally = $scope.valueSotwOne + 1;
		console.log($scope.currentSnackTally);
		if ($scope.chooseOne == true){
			$scope.itemChosen =true;
			$scope.snckWeekVote = '';
		}
		$scope.chooseOne = !($scope.chooseOne);
		if ($scope.chooseTwo == true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseThree == true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseFour == true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectTwo= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'scratchCookie';
		$scope.currentSnackTally = $scope.valueSotwTwo + 1;
		if ($scope.chooseTwo == true){
			$scope.itemChosen =true;
			$scope.snckWeekVote = '';
		}
		$scope.chooseTwo = !($scope.chooseTwo);
		if ($scope.chooseOne == true) {
			$scope.chooseOne = false;
		}
		if ($scope.chooseThree == true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseFour == true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectThree= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'toblerone';
		$scope.currentSnackTally = $scope.valueSotwThree + 1;
		if ($scope.chooseThree == true){
			$scope.itemChosen =true;
			$scope.snckWeekVote = '';
		}
		$scope.chooseThree = !($scope.chooseThree);
		if ($scope.chooseTwo == true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseOne == true) {
			$scope.chooseOne = false;
		}
		if ($scope.chooseFour == true) {
			$scope.chooseFour = false;
		}
	};
	$scope.selectFour= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 'hungryMonkeyWedding';
		$scope.currentSnackTally = $scope.valueSotwFour + 1;
		if ($scope.chooseFour == true){
			$scope.itemChosen =true;
			$scope.snckWeekVote = '';
		}
		$scope.chooseFour = !($scope.chooseFour);
		if ($scope.chooseTwo == true) {
			$scope.chooseTwo = false;
		}
		if ($scope.chooseThree == true) {
			$scope.chooseThree = false;
		}
		if ($scope.chooseOne == true) {
			$scope.chooseOne = false;
		}
	};
	$scope.submitSnck = function() {
		//f$scope.submitted=!($scope.submitted);
		$scope.resultsIndicator = !($scope.resultsIndicator);
		//put vote in snckOfTheWeek
		$http.put('/api/users/api/'+ $scope.getCurrentUser()._id +'/snckOfTheWeek', {snckOfTheWeek: $scope.snckWeekVote})
		.success(function() {
					// refresh the locally cached user
					Auth.refresh();
				});
		if ($scope.snckWeekVote == "milkOreo") {
			$http.put('/api/cards2s/' + $scope.valueIdOne, {"name":$scope.nameFood, "snackOfTheWeek": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwOne = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == "scratchCookie") {
			$http.put('/api/cards2s/' + $scope.valueIdTwo, {"name":$scope.nameFood, "snackOfTheWeek": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwTwo = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == "toblerone") {
			$http.put('/api/cards2s/' + $scope.valueIdThree, {"name":$scope.nameFood, "snackOfTheWeek": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwThree = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == "hungryMonkeyWedding") {
			$http.put('/api/cards2s/' + $scope.valueIdFour, {"name":$scope.nameFood, "snackOfTheWeek": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwFour = $scope.currentSnackTally;
        }
    	$scope.resultsArray = [$scope.valueSotwOne, $scope.valueSotwTwo, $scope.valueSotwThree, $scope.valueSotwFour];
    	console.log(_.max($scope.resultsArray));
    	if (_.max($scope.resultsArray) == $scope.valueSotwOne){
    		$scope.lastTwo = true;
    		$scope.lastThree = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwTwo){
    		$scope.lastOne = true;
    		$scope.lastThree = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwThree){
    		$scope.lastOne = true;
    		$scope.lastTwo = true;
    		$scope.lastFour = true;
    	} else if (_.max($scope.resultsArray) == $scope.valueSotwFour){
    		$scope.lastOne = true;
    		$scope.lastTwo = true;
    		$scope.lastThree = true;
    	}
 			
 			$scope.d = new Date();
    	    $http.post('/votes', {
                name: $scope.snckWeekVote,
                timeanddate: $scope.d,
                userId: $scope.getCurrentUser().name }).success(function(data){
                    Auth.refresh();
            });
	};

		$scope.myMachines = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.hello = !($scope.hello);
			if ($scope.getCurrentUser().machineIds.length < 1){
			$http.put('/api/users/api/' + $scope.getCurrentUser()._id + '/addMachine', {machineId: "SNCK1"})
						.success(function() {
							// refresh the locally cached user
							Auth.refresh();
						});
					} else if ($scope.getCurrentUser().machineIds.length >= 1) {
					}
		};
	   
	   $scope.myAccountBackground = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.account = !($scope.account);
	   };
	   $scope.feedbackBackground = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.feedback = !($scope.feedback);
	   };
	   $scope.comingSoon = function() {
	   	$scope.pooper = !($scope.pooper);
	   };
	}]);