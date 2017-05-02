(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      templateURL: './template.html'
    })

  controller.$inject = ['http']
  function controller(http) {
    const vm = this
    vm.addExpense = addExpense
    vm.editComplete = editComplete
    vm.deleteExpense = deleteExpense
  }

  vm.$onInit = function() {
    $http.get('/')
  }

}());
