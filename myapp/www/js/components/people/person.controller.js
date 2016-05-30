'use strict';
angular
  // Criando um modulo chamado user e habilitando a injeção de dependêcia
  .module('person', [])
  // atribuindo um controller (primeiro parametro é o nome do controller e o segundo é uma função de mesmo nome)
  .controller('PersonController', PersonController)
  // Injetando as dependecias $scope $state e a factory MovieFactory dentro do controller
function PersonController($scope, $state, PersonFactory) {
  // Criando uma variavel de scopo chamada users e já atribuindo um valor a ela
  $scope.people = [];

  function loadPeople() {
    // Chamada da factory utilizando promise
    PersonFactory.getPeople()
      .then(
        // função de sucesso
        function(response) {
          $scope.people = response.data.results;
        },
        // função de erro
        function(error) {
          console.log(error);
        }
      )
  }
  // Função que passa um objeto usuario como parametro para a proxima view
  $scope.goState = function(user) {
    $state.go('app.person', {
      'parametro': user
    });
  }


  // Chamada da função loadMovies
  loadPeople();
}
