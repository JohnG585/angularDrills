(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        component: 'app',
        abstract: true,
      })
      .state({
        name: 'home',
        parent: 'app',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'listings',
        parent: 'app',
        url: '/listings',
        component: 'listings',
      })
  }

}());
