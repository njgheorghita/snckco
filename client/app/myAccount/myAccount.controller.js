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
	$scope.resultsIndicator = false;
	$scope.noRegisteredMachine = false;
	$scope.currentMachine = "";
	$scope.registeredMachine0 = "";
	$scope.registeredMachine1 = "";
	$scope.registeredMachine2 = "";
	$scope.registeredLocation0 = "";
	$scope.registeredLocation1 = "";
	$scope.registeredLocation2 = "";
	$scope.displayMachine0 = false;
	$scope.displayMachine1 = false;
	$scope.displayMachine2 = false;
	$scope.currentUserSotwCount = 0;
	$scope.sotwArray = [
				{
					'proper':'',
					'local': '',
					'description':'',
					'price':'',
					'name':'',
					'urlHomepage':''
				},
				{
					'proper':'',
					'local': '',
					'description':'',
					'price':'',
					'name':'',
					'urlHomepage':''
				},
				{
					'proper':'',
					'local': '',
					'description':'',
					'price':'',
					'name':'',
					'urlHomepage':''
				},
				{
					'proper':'',
					'local': '',
					'description':'',
					'price':'',
					'name':'',
					'urlHomepage':''
				}
			];				 

	$http.get('/api/machines').success(function(data) {

                $scope.machineIdentification = data;
                $scope.currentMachine = $scope.getCurrentUser().machineIds[0];
                $scope.currentSotw0 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw0");
                $scope.valueCurrentSotw0 = $scope.currentSotw0[0];
                $scope.currentSotw1 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw1");
                $scope.valueCurrentSotw1 = $scope.currentSotw1[0];
                $scope.currentSotw2 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw2");
                $scope.valueCurrentSotw2 = $scope.currentSotw2[0];
                $scope.currentSotw3 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw3");
                $scope.valueCurrentSotw3 = $scope.currentSotw3[0];
				$http.get('/api/cards2s').success(function(data) {
					$scope.sotwCount = data;
				       
					});
     });

	$scope.machineFunction0 = function () {
 				$scope.currentMachine = $scope.getCurrentUser().machineIds[0];
                $scope.currentSotw0 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw0");
                $scope.valueCurrentSotw0 = $scope.currentSotw0[0];
                $scope.currentSotw1 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw1");
                $scope.valueCurrentSotw1 = $scope.currentSotw1[0];
                $scope.currentSotw2 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw2");
                $scope.valueCurrentSotw2 = $scope.currentSotw2[0];
                $scope.currentSotw3 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw3");
                $scope.valueCurrentSotw3 = $scope.currentSotw3[0];
            //refresh cards
                $scope.cardRefresh();

  	}; 
	$scope.machineFunction1 = function () {
		 		$scope.currentMachine = $scope.getCurrentUser().machineIds[1];
                $scope.currentSotw0 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw0");
                $scope.valueCurrentSotw0 = $scope.currentSotw0[0];
                $scope.currentSotw1 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw1");
                $scope.valueCurrentSotw1 = $scope.currentSotw1[0];
                $scope.currentSotw2 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw2");
                $scope.valueCurrentSotw2 = $scope.currentSotw2[0];
                $scope.currentSotw3 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw3");
                $scope.valueCurrentSotw3 = $scope.currentSotw3[0];
        //refresh cards
        $scope.cardRefresh();
  	}; 
	$scope.machineFunction2 = function () {
		 		$scope.currentMachine = $scope.getCurrentUser().machineIds[2];
                $scope.currentSotw0 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw0");
                $scope.valueCurrentSotw0 = $scope.currentSotw0[0];
                $scope.currentSotw1 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw1");
                $scope.valueCurrentSotw1 = $scope.currentSotw1[0];
                $scope.currentSotw2 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw2");
                $scope.valueCurrentSotw2 = $scope.currentSotw2[0];
                $scope.currentSotw3 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "sotw3");
                $scope.valueCurrentSotw3 = $scope.currentSotw3[0];
        //refresh cards
        $scope.cardRefresh();
  	}; 
  	$scope.cardRefresh = function () {
		//setting up card 0
 						$scope.name0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "name");
				        $scope.proper0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "proper");
				        $scope.location0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "location");
				        $scope.local0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "local");
				        $scope.description0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "description");
				        $scope.price0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "price"); 
				        $scope.urlHomepage0 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw0}), "urlHomepage");                 
				        $scope.valueName0 = $scope.name0[0];                 
				        $scope.valueProper0 = $scope.proper0[0];                 
				        $scope.valueLocation0 = $scope.location0[0];
				        if ($scope.local0[0] == "True"){
				        	$scope.valueLocal0 = true;
				        } else if ($scope.local0[0] == "False") {
				        	$scope.valueLocal0 = false;				        	
				        }                   
				        $scope.valueDescription0 = $scope.description0[0];                 
				        $scope.valuePrice0 = $scope.price0[0];                 
				        $scope.valueUrlHomepage0 = $scope.urlHomepage0[0];
				        $scope.pictureLink0 = "./../../assets/images/" + $scope.valueName0 + ".jpg";
		//setting up card 1
 						$scope.name1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "name");
				        $scope.proper1 = _.pluck(_.where($scope.sotwCount, {"name" : $scope.valueCurrentSotw1}), "proper");
				        $scope.location1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "location");
				        $scope.local1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "local");
				        $scope.description1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "description");
				        $scope.price1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "price"); 
				        $scope.urlHomepage1 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw1}), "urlHomepage");                 
				        $scope.valueName1 = $scope.name1[0];                 
				        $scope.valueProper1 = $scope.proper1[0];                 
				        $scope.valueLocation1 = $scope.location1[0];
				        if ($scope.local1[0] == "True"){
				        	$scope.valueLocal1 = true;
				        } else if ($scope.local1[0] == "False") {
				        	$scope.valueLocal1 = false;				        	
				        }                   
				        $scope.valueDescription1 = $scope.description1[0];                 
				        $scope.valuePrice1 = $scope.price1[0];                 
				        $scope.valueUrlHomepage1 = $scope.urlHomepage1[0];
				        $scope.pictureLink1 = "./../../assets/images/" + $scope.valueName1 + ".jpg";

		//setting up card 2
 						$scope.name2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "name");
				        $scope.proper2 = _.pluck(_.where($scope.sotwCount, {"name" : $scope.valueCurrentSotw2}), "proper");
				        $scope.location2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "location");
				        $scope.local2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "local");
				        $scope.description2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "description");
				        $scope.price2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "price"); 
				        $scope.urlHomepage2 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw2}), "urlHomepage");                 
				        $scope.valueName2 = $scope.name2[0];                 
				        $scope.valueProper2 = $scope.proper2[0];                 
				        $scope.valueLocation2 = $scope.location2[0];
				        if ($scope.local2[0] == "True"){
				        	$scope.valueLocal2 = true;
				        } else if ($scope.local2[0] == "False") {
				        	$scope.valueLocal2 = false;				        	
				        }    
				        $scope.valueDescription2 = $scope.description2[0];                 
				        $scope.valuePrice2 = $scope.price2[0]; 
				        console.log($scope.valuePrice2);                
				        $scope.valueUrlHomepage2 = $scope.urlHomepage2[0];
				        $scope.pictureLink2 = "./../../assets/images/" + $scope.valueName2 + ".jpg";

		//setting up card 4
 						$scope.name3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "name");
				        $scope.proper3 = _.pluck(_.where($scope.sotwCount, {"name" : $scope.valueCurrentSotw3}), "proper");
				        $scope.location3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "location");
				        $scope.local3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "local");
				        $scope.description3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "description");
				        $scope.price3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "price"); 
				        $scope.urlHomepage3 = _.pluck(_.where($scope.sotwCount, {'name' : $scope.valueCurrentSotw3}), "urlHomepage");                 
				        $scope.valueName3 = $scope.name3[0];                 
				        $scope.valueProper3 = $scope.proper3[0];                 
				        $scope.valueLocation3 = $scope.location3[0];  
				        if ($scope.local3[0] == "True"){
				        	$scope.valueLocal3 = true;
				        } else if ($scope.local3[0] == "False") {
				        	$scope.valueLocal3 = false;				        	
				        }             
				        $scope.valueDescription3 = $scope.description3[0];                 
				        $scope.valuePrice3 = $scope.price3[0];                 
				        $scope.valueUrlHomepage3 = $scope.urlHomepage3[0];
				        $scope.pictureLink3 = "./../../assets/images/" + $scope.valueName3 + ".jpg";

		//setting up sotw cards
				$scope.sotwArray = [
				{
					'proper':$scope.valueProper0,
					'local': $scope.valueLocal0,
					'description':$scope.valueDescription0,
					'price':$scope.valuePrice0,
					'name':$scope.valueCurrentSotw0,
					'urlHomepage':$scope.valueUrlHomepage0
				},
				{
					'proper':$scope.valueProper1,
					'local': $scope.valueLocal1,
					'description': $scope.valueDescription1,
					'price':$scope.valuePrice1,
					'name':$scope.valueCurrentSotw1,
					'urlHomepage':$scope.valueUrlHomepage1
				},
				{
					'proper':$scope.valueProper2,
					'local': $scope.valueLocal2,
					'description':$scope.valueDescription2,
					'price':$scope.valuePrice2,
					'name':$scope.valueCurrentSotw2,
					'urlHomepage':$scope.valueUrlHomepage2
				},
				{
					'proper':$scope.valueProper3,
					'local': $scope.valueLocal3,
					'description':$scope.valueDescription3,
					'price':$scope.valuePrice3,
					'name':$scope.valueCurrentSotw3,
					'urlHomepage':$scope.valueUrlHomepage3
				}
			];			console.log($scope.sotwArray[0].local, $scope.valueLocal0, $scope.valueLocal0, $scope.valueLocal2, $scope.valueLocal3);

			$scope.registeredLocation0 = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "location");	
			$scope.valueRegisteredLocation0 = $scope.registeredLocation0[0];			        
  	};

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
	"Baby's got snck.",
	"We got your snck."];

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
	$scope.bravado = true;
	$scope.menuItemBackground = false;
	$scope.freshPressed = false;

	$scope.snckButton = function () {
		$scope.cardRefresh();
		//displays register a machine ya dangus if there is no registered machine
	if ($scope.getCurrentUser().machineIds[0] == undefined) {
		$scope.noRegisteredMachine = !($scope.noRegisteredMachine);
		$scope.votes = !($scope.votes);
		$scope.submitted = !($scope.submitted);

	} else if ($scope.freshPressed == false) {
		$scope.freshPressed = !($scope.freshPressed);
		$scope.votes = !($scope.votes);
		$scope.menuItemBackground = !($scope.menuItemBackground);
	//setting user machines for sotw
	if ($scope.getCurrentUser().machineIds[0] != undefined){
		$scope.registeredMachine0 = $scope.getCurrentUser().machineIds[0];
		$scope.registeredLocation0 = $scope.getCurrentUser().machineIds[0].location;
	} 
	if ($scope.getCurrentUser().machineIds[1] != undefined){
		$scope.registeredMachine1 = $scope.getCurrentUser().machineIds[1];
		$scope.registeredLocation1 = $scope.getCurrentUser().machineIds[1].location;
	}
	if ($scope.getCurrentUser().machineIds[2] != undefined){
		$scope.registeredMachine2 = $scope.getCurrentUser().machineIds[2].name;
		$scope.registeredLocation2 = $scope.getCurrentUser().machineIds[2].location;
	}
	
	//get sotw vote counts
    $scope.currentSotwOne = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "tally0");
    $scope.currentSotwTwo = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "tally1");
    $scope.currentSotwThree = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "tally2");
    $scope.currentSotwFour = _.pluck(_.where($scope.machineIdentification, {'machineId' : $scope.currentMachine}), "tally3");
    $scope.valueSotwOne = $scope.currentSotwOne[0];
    $scope.valueSotwTwo = $scope.currentSotwTwo[0];
    $scope.valueSotwThree = $scope.currentSotwThree[0];
    $scope.valueSotwFour = $scope.currentSotwFour[0];

    //set card id to match corresponding cards2s schema //adjusted to correspopnd with machine schema
    $scope.idOne = _.pluck(_.where($scope.machineIdentification, {'machineId' : 'J3AN3'}), '_id');
    $scope.idTwo = _.pluck(_.where($scope.machineIdentification, {'machineId' : 'JVNE'}), '_id');
    $scope.idThree = _.pluck(_.where($scope.machineIdentification, {'machineId' : 'MYL33'}), '_id');
    $scope.idFour = _.pluck(_.where($scope.machineIdentification, {'machineId' : 'NO3L'}), '_id');
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



    if (_.indexOf($scope.getCurrentUser().snckOfTheWeek, $scope.currentMachine) != -1){
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
	}else {	$scope.votes = !($scope.votes);}

	};

	$scope.selectOne= function() {
		$scope.itemChosen = false;
		$scope.snckWeekVote = 0;
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
		$scope.snckWeekVote = 1;
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
		$scope.snckWeekVote = 2;
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
		$scope.snckWeekVote = 3;
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
		//$scope.submitted=!($scope.submitted);
		$scope.resultsIndicator = !($scope.resultsIndicator);
		//put vote in snckOfTheWeek
		//NEED TO PUSH EVERY SOTW VOTE TO VOTES ARRAY!!
		//$http.put('/api/users/api/'+ $scope.getCurrentUser()._id +'/snckOfTheWeek', {snckOfTheWeek: $scope.snckWeekVote})
		//.success(function() {
					// refresh the locally cached user
					//Auth.refresh();
				//});
		if ($scope.snckWeekVote == 0) {
			$http.put('/api/machines/' + $scope.valueIdOne, { "tally0": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwOne = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == 1) {
			$http.put('/api/machines/' + $scope.valueIdTwo, { "tally1": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwTwo = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == 2) {
			$http.put('/api/machines/' + $scope.valueIdThree, { "tally2": $scope.currentSnackTally})
	                .success(function() {
	                })
	                .error(console.log('errorrrrr'));
	                $scope.valueSotwThree = $scope.currentSnackTally;
        } else if ($scope.snckWeekVote == 3) {
			$http.put('/api/machines/' + $scope.valueIdFour, {"tally3": $scope.currentSnackTally})
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
            $http.put('/api/users/api/' + $scope.getCurrentUser()._id + '/snckOfTheWeek', {snckOfTheWeek: $scope.currentMachine})
					.success(function() {
						// refresh the locally cached user
						Auth.refresh();
					});
	};

		$scope.myMachines = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.hello = !($scope.hello);
			/*if ($scope.getCurrentUser().machineIds.length < 1){
			$http.put('/api/users/api/' + $scope.getCurrentUser()._id + '/addMachine', {machineId: "SNCK1"})
						.success(function() {
							// refresh the locally cached user
							Auth.refresh();
						});
					} else if ($scope.getCurrentUser().machineIds.length >= 1) {
					}*/
		};
	   
	   $scope.myAccountBackground = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.account = !($scope.account);
	   };
	   $scope.feedbackBackground = function () {
			$scope.menuItemBackground = !($scope.menuItemBackground);
			$scope.feedback = !($scope.feedback);
	   };

	}]);