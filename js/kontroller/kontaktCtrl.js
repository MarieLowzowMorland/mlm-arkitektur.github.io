hjemmesideApp.controller('kontaktCtrl', ['$scope', '$window', function($scope, $window) {
        "use strict";
        $scope.marie = "marie";
        
        $scope.kontaktMeg = function(navn, alfa){
            var etternavn = "morland";
            $window.location = "mailto:" + navn + alfa + etternavn + ".no";
        };
}]);