(function() {
  'use strict'

  angular.module('app')
    .component('houseShow', {
      controller: controller,
      template: `
        <h1>{{$ctrl.house.name}}</h1>

        <p>{{$ctrl.house.address}}</p>

        <a ui-sref = "home">Go Home</a>
      `
    })

    controller.$inject = ['houseService', '$stateParams']
    function controller(houseService, $stateParams) {
      const vm = this

      vm.$onInit = function () {
        const houseId = $stateParams.id;
        vm.house = houseService.findById(houseId)
      }
    }

}());
