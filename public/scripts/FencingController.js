angular.module('olympicsApp').controller('FencingController', function($scope, $http){
  $http.get('/olympics/fencing').then(function(response){
    $scope.fencing = response.data;
    console.log('Success', response);
  }, function (response) {
    console.log('Failure', response);
  })
});
