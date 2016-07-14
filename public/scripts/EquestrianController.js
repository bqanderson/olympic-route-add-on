angular.module('olympicsApp').controller('EquestrianController', function($scope, $http){
  $http.get('/olympics/equestrian').then(function(response){
    $scope.equestrian = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
