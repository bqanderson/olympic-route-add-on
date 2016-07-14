angular.module('olympicsApp').config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/badminton', {
    templateUrl: 'views/badminton.html',
    controller: 'BadmintonController'

  })
  .when('/fencing', {
    templateUrl: 'views/fencing.html',
    controller: 'FencingController'
  })
  .when('/equestrian', {
    templateUrl: 'views/equestrian.html',
    controller: 'EquestrianController'
  })
  .when('/archery', {
    templateUrl: 'views/archery.html',
    controller: 'ArcheryController'
  })
  .when('/sailing', {
    templateUrl: 'views/sailing.html',
    controller: 'SailingController'
  })

  $locationProvider.html5Mode(true);

});
