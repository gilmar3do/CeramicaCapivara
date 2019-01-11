(function () {
    'use strict';

    angular.module('CeramicaCapivara').config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    angular.module('CeramicaCapivara').config(function ($routeProvider) {
        $routeProvider
            .when('/produtos', {
                controller: 'CeramicaController',
                controllerAs: 'vm',
                templateUrl: 'produtos.html'
            })
            .when('/quemsomos', {
                controller: 'CeramicaController',
                controllerAs: 'vm',
                templateUrl: 'quem_somos.html'
            })
            .when('/aceramica', {
                controller: 'CeramicaController',
                controllerAs: 'vm',
                templateUrl: 'a_ceramica.html'
            })
            .when('/aserra', {
                controller: 'CeramicaController',
                controllerAs: 'vm',
                templateUrl: 'a_serra.html'
            })
            .when('/home', {
                controller: 'CeramicaController',
                controllerAs: 'vm',
                templateUrl: 'index.html'
            });
    });
})();