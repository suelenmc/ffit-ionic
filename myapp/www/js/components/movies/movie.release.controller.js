'use strict';
angular
  .module('movie')
  .controller('MovieReleaseController', MovieReleaseController)
function MovieReleaseController($scope, $state, MovieFactory) {
  $scope.movies = [];

  function loadMovies() {
    MovieFactory.getMovies()
      .then(
        function(response) {
          $scope.movies = response.data.results;
        },
        function(error) {
          console.log(error);
        }
      )
  }
  $scope.goState = function(user) {
    $state.go('app.movie', {
      'parametro': user
    });
  }

  var date = new Date();
  $scope.today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  
  loadMovies();
}
