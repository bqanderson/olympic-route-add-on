angular.module('olympicsApp').factory('DataService', function($http){
  var data = {};

  function handleSuccess(response){
    data.athletes = response.data;
  }

  function handleFailure(response){
    console.log('Everything is brooooooooooooooken!!', response);
  }

  function makeCall(){
    $http.get('/olympics').then(handleSuccess, handleFailure);
  }

  makeCall();

  return {
    data: data,
    makeCall: makeCall
  }
});
