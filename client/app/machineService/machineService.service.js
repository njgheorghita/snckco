'use strict';

angular.module('snckcoApp')
  .service('machineService', ["$rootScope", function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    /*var users = '';
    return {
    	all: function () {
    		return users;
    	},
    	first: function() {
    		return users;
    	}*/

    var currentMachine = [{
    	currentMachineId: '',
    }];

    return {
    	setSetId: function(setId) {
    		currentMachine.currentMachineId = setId;
    	},
    	getSetId: function() {
    		return currentMachine.currentMachineId;
    	}
    };
	
}]);
