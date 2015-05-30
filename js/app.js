var hjemmesideApp = angular.module('marieApp', ['ui.router']);

hjemmesideApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        "use strict";
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url:'',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html' },
              "hovedvindu": { templateUrl: 'templates/velkomstbilde.html'}
            }
        })
        .state('om', {
            url:'/meg/om',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "hovedvindu": { templateUrl: 'templates/hoved/meg.html', controller: 'ProsjekterCtrl'  },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/meg.html' }
            }
        })
        .state('filosofi', {
            url:'/meg/filosofi',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "hovedvindu": { templateUrl: 'templates/hoved/meg.html', controller: 'ProsjekterCtrl'  },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/filosofi.html' }
            }
        })
        .state('arkitektur', {
            url:'/arkitektur',
            views: {
              "topp-venstre": { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
              "nede-venstre": { templateUrl: 'templates/nedeVenstre/info.html' },
              "hovedvindu": { templateUrl: 'templates/hoved/arkitektur.html', controller: 'ProsjekterCtrl' }
            }
        });
    }
]);