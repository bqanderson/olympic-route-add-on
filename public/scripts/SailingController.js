angular.module('olympicsApp').controller('SailingController', function($scope, $http){
  $http.get('/olympics/sailing').then(function(response){
    $scope.sailing = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
