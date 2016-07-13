var app = angular.module('olympicsApp', ['ngRoute']);

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

})

angular.module('olympicsApp').controller('BadmintonController', function($scope, $http){
  $http.get('/olympics/badminton').then(function(response){
    $scope.badminton = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});

angular.module('olympicsApp').controller('FencingController', function($scope, $http){
  $http.get('/olympics/fencing').then(function(response){
    $scope.fencing = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});

angular.module('olympicsApp').controller('EquestrianController', function($scope, $http){
  $http.get('/olympics/equestrian').then(function(response){
    $scope.equestrian = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});

angular.module('olympicsApp').controller('ArcheryController', function($scope, $http){
  $http.get('/olympics/archery').then(function(response){
    $scope.archery = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});

angular.module('olympicsApp').controller('SailingController', function($scope, $http){
  $http.get('/olympics/sailing').then(function(response){
    $scope.sailing = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
