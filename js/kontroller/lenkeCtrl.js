hjemmesideApp.controller('LenkeCtrl', ['$scope', '$state', function($scope, $state) {
        "use strict";
        $scope.tranisjon = "inn";
        $scope.menyvisningstatus = "viser";
        
        $scope.endreMeny = function(klasse){
            $scope.menyvisningstatus = klasse === "ut" ? "" : "viser";
            $scope.tranisjon = klasse;
        };
        
        $scope.undermenyListe = {
            meg: [
                {k:"om", v:"Om meg"},
                {k:"kontakt", v:"Kontakt"},
                {k:"filosofi", v:"Filosofi"},
                {k:"cv", v:"CV"}
            ]
        };
        
        (function finnStateNavn(){
            var navn = $state.current.url.split("/");
            $scope.menyvalg = navn[1];
            $scope.undermeny = navn[2];
        })()
}]);