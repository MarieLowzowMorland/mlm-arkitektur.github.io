hjemmesideApp.controller('LenkeCtrl', ['$scope', '$state', function($scope, $state) {
        
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