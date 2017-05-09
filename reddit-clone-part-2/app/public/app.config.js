(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

  //  use cleaner urls like /people/1
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({name: 'home', url: '/', component: 'posts'})
      .state({name: 'edit', url: '/posts/{id}/edit', component: 'forms'})
  }

}());
