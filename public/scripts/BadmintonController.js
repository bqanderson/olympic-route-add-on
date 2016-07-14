angular.module('olympicsApp').controller('BadmintonController', function($scope, $http){
  $http.get('/olympics/badminton').then(function(response){
    $scope.badminton = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
