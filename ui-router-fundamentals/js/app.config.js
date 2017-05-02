(function() {
  'use strict';

  angular.module('app').config(config)

  // TODO: figure out how to configure the app correctly

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5mode(true)

    $.stateProvider
      .state({name: 'home', url: '/', component: 'houseList'})
      .state({name: 'new', url: '/houses/new', component: 'houseNew'})
      .state({name: 'create', url: `/houses/${id}`, component: 'houseShow'})
  }

}());
