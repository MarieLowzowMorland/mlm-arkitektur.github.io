hjemmesideApp.controller('ProsjekterCtrl', ['$scope', '$state', '$http', '$timeout', function($scope, $state, $http, $timeout) {
    "use strict";
        
    (function init(){
        var navn, url;
        navn = $state.current.url.split("/");
        url = "bilder/autogenerert/" + navn[1] + "/" + (navn[2] === undefined ? "" : navn[2].replace(new RegExp("_", 'g'), " ") + "/");
        
        $http.get("/"+url+"filListe.json").success(function(filListe) {
            $scope.filListe = filListe;
            
            $timeout(function(){
                $('#bildeviser').bildespinner(url, filListe);
            });
        }).error(function(){
            $scope.filListe = [];
        }); 
    })();
}]);