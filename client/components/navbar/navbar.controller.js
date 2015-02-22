'use strict';

angular.module('snckcoApp')
  .controller('NavbarCtrl', function ($scope, $rootScope, $urlRouter, $timeout, $state, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.variableNumber = getRandomSpan();
    $scope.variableLink = './../../assets/images/machines/'+$scope.variableNumber+'.jpg';

    function getRandomSpan() {
      return Math.floor((Math.random()*38)+1);
    };

    $rootScope.$on('$stateChangeStart', function (evt, toState, toParams) {
      console.log('Navigating to state:', toState);
      if (toState.ignoreTransition) {
        delete toState.ignoreTransition;
        return;
      }

      evt.preventDefault();

      $('div.navbar').addClass('transition');

      $timeout(function() {
        $.extend(toState, {ignoreTransition: true});

        console.log('Forcing transition to:', toState);

        $state.go(toState);
        $('div.navbar').removeClass('transition');
      }, 1000);
    });

    $scope.cardstack = [{
      'card-stack': 'Cards',
      'link': '/cards'
    }];

    $scope.showdown = [{
      'showdown': 'Showdown',
      'link': '/showdown'
    }];

    $scope.isCollapsed = true;


    Auth.isLoggedIn().then(function(data){
      $scope.isLoggedIn = data
    })

    $scope.Auth = Auth;

    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      Auth.isLoggedIn().then(function(data){
        console.error("what is coming as response",data);
        $scope.isLoggedIn = data
      })
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });