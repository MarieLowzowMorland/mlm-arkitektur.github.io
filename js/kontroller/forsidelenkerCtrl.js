hjemmesideApp.controller('forsidelenkerCtrl', ['$scope', function($scope) {
        "use strict";
        
        $scope.inverted = true;
        
        $scope.$on('$viewContentLoaded', function(event) {
            $(".skygge").hover(function() {
                $(this).parent().parent().siblings("a").children().children(".skygge").addClass("aktiv");
            }, function() {
                $(this).parent().parent().siblings("a").children().children(".skygge").removeClass("aktiv");
            });
        });
}]);