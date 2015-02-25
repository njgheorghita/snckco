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
      if (toState.ignoreTransition) {
        delete toState.ignoreTransition;
        return;
      }

      evt.preventDefault();

      $('div.navbar').addClass('transition');

      $timeout(function() {
        $.extend(toState, {ignoreTransition: true});


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

    $scope.Auth = Auth;

    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });