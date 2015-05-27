var hjemmesideApp = angular.module('marieApp', ['ui.router']);

hjemmesideApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url:'',
            templateUrl: 'templates/oppeVenstre/lenker.html'
        })
        .state('side', {
            url:'',
            templateUrl: 'templates/sidestruktur.html'
        })
        .state('side.om', {
            url:'/meg/om',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "hovedvindu": { templateUrl: 'templates/hoved/meg.html', controller: 'ProsjekterCtrl'  },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/meg.html' }
            }
        })
        .state('side.filosofi', {
            url:'/meg/filosofi',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "hovedvindu": { templateUrl: 'templates/hoved/meg.html', controller: 'ProsjekterCtrl'  },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/filosofi.html' }
            }
        })
        .state('side.arkitektur', {
            url:'/arkitektur',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/info.html' },
              "hovedvindu": { templateUrl: 'templates/hoved/arkitektur.html', controller: 'ProsjekterCtrl' }
            }
        });
    }
]);