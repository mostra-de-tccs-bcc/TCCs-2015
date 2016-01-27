angular.module("tccs.services")
  .service("$DataService", function($http, $q){
    // URL DO ARQUIVO COM OS DADOS
    var baseUrl = "./javascripts/data.json";

    var service = {};

    var req = {
      method : 'GET',
      url    : baseUrl,
      header : {
        'Content-Type': 'application/json'
      }
    };

    service.getTCCS = function(){
      var deferred = $q.defer();
      $http(req)
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(data, status){
          deferred.reject("falha_de_requisicao_"+status);
        });
      return deferred.promise;
    }

    return service;

  });
