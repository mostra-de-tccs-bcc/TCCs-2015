angular.module("tccs.controllers")
  .controller("TccsController", function($scope, $DataService){

    $scope.tccs = [];

    $scope.info = {
      load  : false,
      error : false
    }


    var loadData = function(){
      console.log("Iniciou Carregamento");
      $DataService.getTCCS()
        .then(
          // Sucesso
          function(dados){
            $scope.tccs = dados.TCCS;
            console.log("Sucesso no Carregamento");
            console.log(dados.TCCS[0]);
            $scope.info.load = true;
          },
          // Fracasso
          function(erro){
            console.log("Falha no Carregamento");
            console.error(erro);
            $scope.info.error = true;
          })

        .finally(
          function(){
            console.log("Terminou Carregamento");
          });
    }
    loadData();

  });
