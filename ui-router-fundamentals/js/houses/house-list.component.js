(function() {
  'use strict'

  angular.module('app')
    .component('houseList', {
      controller: controller,
      template: `
        <h1>Houses</h1>

        <ul>
          <li ng-repeat="house in $ctrl.houses">
            <a ui-sref="show({id:{{house.id}} })">{{house.name}}</a>
          </li>
        </ul>

        <a ui-sref="new">Create New House</a>
      `
    })

    controller.$inject = ['$state', 'houseService']
    function controller ($state, houseService) {
      const vm = this
      console.log("hi");
      vm.$onInit = function () {
        vm.houses = houseService.houses
      }
    }

}());
