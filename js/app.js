var hjemmesideApp = angular.module('marieApp', ['ui.router']);

hjemmesideApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        "use strict";
        var 
        lenker = { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'LenkeCtrl' },
        forsidelenker = { templateUrl: 'templates/oppeVenstre/lenker.html', controller: 'forsidelenkerCtrl' },
        kontaktSide = { templateUrl: 'templates/nedeVenstre/meg/kontakt.html', controller: 'kontaktCtrl' },
        bildeSlider = { templateUrl: 'templates/hoved/bildeSpinner.html', controller: 'ProsjekterCtrl'  };

        function tekst(templateUrl){
            return { templateUrl: templateUrl, controller: 'TekstCtrl'  };
        }

        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url:'',
            views: {
              "topp-venstre": forsidelenker,
              "hovedvindu": tekst('templates/velkomstbilde.html')
            }
        })
        .state('om', {
            url:'/meg/om',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/meg/om.html')
            }
        })
        .state('cv', {
            url:'/meg/cv',
            views: {
              "topp-venstre": lenker,
              "nede-venstre": tekst('templates/nedeVenstre/meg/cv.html')
            }
        })
        .state('kontakt', {
            url:'/meg/kontakt',
            views: {
              "topp-venstre": lenker,
              "nede-venstre": kontaktSide
            }
        })
        .state('filosofi', {
            url:'/meg/filosofi',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/meg/filosofi.html')
            }
        })
        .state('Barnehage_naturligvis', {
            url:'/arkitektur/Barnehage_naturligvis',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/barnehage-naturligvis.html')
            }
        })
        .state('En_ny_sosial_fasade', {
            url:'/arkitektur/En_ny_sosial_fasade',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/en_ny_sosial_fasade.html')
            }
        })
        .state('Trondheim_litteraturhus', {
            url:'/arkitektur/Trondheim_litteraturhus',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/trondheim_litteraturhus.html')
            }
        })
        .state('Rom_for_mennesket', {
            url:'/arkitektur/Rom_for_mennesket',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/rom_for_mennesket.html')
            }
        })
        .state('Moebel_for_barn', {
            url:'/arkitektur/Moebel_for_barn',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/moebel_for_barn.html')
            }
        })
        .state('Johanneskirken', {
            url:'/arkitektur/Johanneskirken',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/johanneskirken.html')
            }
        })
        .state('Droemmenes_paviliong', {
            url:'/arkitektur/Droemmenes_paviliong',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/droemmenes_paviliong.html')
            }
        })
        .state('Tektonik', {
            url:'/arkitektur/Tektonik',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/tektonik.html')
            }
        })
        .state('Ladestien_Barnehage', {
            url:'/arkitektur/Ladestien_Barnehage',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/arkitektur/ladestien_Barnehage.html')
            }
        })
        .state('Foto', {
            url:'/foto/Foto',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/foto/foto.html')
            }
        })
        .state('Streker', {
            url:'/streker/Streker',
            views: {
              "topp-venstre": lenker,
              "hovedvindu": bildeSlider,
              "nede-venstre": tekst('templates/nedeVenstre/streker/streker.html')
            }
        });
    }
]);