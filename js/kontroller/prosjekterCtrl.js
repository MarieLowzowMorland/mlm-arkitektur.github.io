hjemmesideApp.controller('ProsjekterCtrl', ['$scope', function($scope) {
  $('#bildeviser').orbit({
            animation: 'fade',
            animationSpeed: 1000,
            timer: true,
            advanceSpeed: 10000,
            directionalNav: true,
            bullets: true
        });
}]);