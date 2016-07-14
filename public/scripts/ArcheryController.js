angular.module('olympicsApp').controller('ArcheryController', function($scope, $http){
  $http.get('/olympics/archery').then(function(response){
    $scope.archery = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
