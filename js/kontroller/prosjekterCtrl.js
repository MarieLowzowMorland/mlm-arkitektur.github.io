hjemmesideApp.controller('ProsjekterCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
    "use strict";
    
    function startSlider(){
        $('#bildeviser').orbit({
            animation: 'fade',
            animationSpeed: 1000,
            timer: true,
            advanceSpeed: 10000,
            directionalNav: true,
            bullets: true
        });
    }
        
    (function init(){
        var navn, url;
        navn = $state.current.url.split("/");
        url = "bilder/autogenerert/" + navn[1] + "/" + (navn[2] === undefined ? "" : navn[2] + "/");
        
        $http.get("/"+url+"filListe.json").success(function(filListe) {
            $scope.bildeUrl = url;
            $scope.filListe = filListe;
            
            setTimeout(startSlider, 200);
        }); 
    })();
}]);