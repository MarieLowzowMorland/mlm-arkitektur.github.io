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
            ],
            foto: [
                {k:"Foto", v:"Foto"}
            ],
            streker: [
                {k:"Streker", v:"Streker"}
            ],
            arkitektur: [
                {k:"Barnehage_naturligvis", v:"Barnehage naturligvis"},
                {k:"Trondheim_litteraturhus", v:"Trondheim litteraturhus"},
                {k:"Rom_for_mennesket", v:"Rom for mennesket"},
                {k:"Moebel_for_barn", v:"Møbel for barn"},
                {k:"Johanneskirken", v:"Johanneskirken"},
                {k:"Droemmenes_paviliong", v:"Drømmenes paviliong"},
                {k:"Tektonik", v:"Tektonik"},
                {k:"Ladestien_Barnehage", v:"Ladestien Barnehage"}
            ]
        };
        
        (function finnStateNavn(){
            var navn = $state.current.url.split("/");
            $scope.menyvalg = navn[1];
            $scope.undermeny = navn[2];
        })();
        
        $scope.skalHaSkygge = function(menyElementNavn){
            return menyElementNavn === $scope.menyvalg;
        };
}]);