(function() {
  'use strict';

    angular.module('app', [])
    .component('cart', {
          controller: controller,
          template: `
              <form ng-submit="$ctrl.addItem()">
                <p>
                  <input ng-model="$ctrl.item.name" placeholder="Enter item name" />
                </p>
                <p>
                  <input ng-model="$ctrl.item.quantity" placeholder="Enter Quantity" />
                </p>
                <p>
                  <button type="submit">Add Item</button>
                </p>
              </form>

                <div ng-repeat="item in $ctrl.items">
                  <strong>{{item.name}}</strong>: {{item.quantity}}
                <a href="#" ng-click="$ctrl.deleteItem($event, item)">Delete</a>
                </div>
    `
    });

    function controller() {
      const vm = this
      vm.$onInit = function() {
        vm.items = [
          {name: 'Rug', quantity: 3},
          {name: 'Couch', quantity: 2}
        ]
      }
      vm.deleteItem = function(e, item) {
        console.log(item)
        e.preventDefault()
        vm.items.splice(vm.items.indexOf(item),1)
      }
      vm.addItem = function() {
        vm.items.push(vm.item)
        delete vm.item
      }
    }

}());
