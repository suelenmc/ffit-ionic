'use strict';
angular
// Injetando  esse controller dentro do modulo 'user'
// observe que nao temos a virgula com os cochetes .module('user',[])
// ou seja  não estamos declarando um modulo mais sim setando dependencias dentro de um modulo já existente )
  .module('person')
  .controller('PersonShowController', PersonShowController)

function PersonShowController($scope, $stateParams) {
  $scope.person = {};
  // Carregando o usuario que foi passado como parametro pela listagem
  function loadPerson() {
    console.log($stateParams.parametro);
    $scope.person = $stateParams.parametro;
  }

  loadPerson();
}
