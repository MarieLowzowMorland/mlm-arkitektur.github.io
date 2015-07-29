hjemmesideApp.controller('TekstCtrl', ['$scope', function($scope) {
        "use strict";
        
        $scope.visTekst = false;
        
        $scope.lesMer = function(){
            $scope.visTekst = true;
        };
        
        $scope.lukk = function(){
            $scope.visTekst = false;
        };
}]);