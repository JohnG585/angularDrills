(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      template: `
      <h1>Expenses</h1>

      <form novalidate name="$ctrl.purchaseForm" ng-submit="$ctrl.addExpense($ctrl.expense.category, $ctrl.expense.amount)">
          <p>
              Category: <input id="new-category" name="category" ng-model="$ctrl.expense.category">
          </p>
          <p>
              Amount: <input id="new-amount" name="amount" ng-model="$ctrl.expense.amount">
          </p>
          <p>
              <button type="submit">Add Expense</button>
          </p>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="expense in $ctrl.expenses">
            <td>{{ expense.id }}</td>
            <td>{{ expense.category }}</td>
            <td>{{ expense.amount }}</td>
            <td>
              <a href="#">edit</a>
              <a href="#" ng-click="$ctrl.deleteExpense(expense.id)">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div ng-show="$ctrl.editFormShow">
      <form novalidate name="$ctrl.editForm" ng-submit="$ctrl.editComplete($ctrl.editExpense.id)">
        <p>
          Category: <input id="edit-category" ng-model="$ctrl.editExpense.category">
        </p>
        <p>
          Amount: <input id="edit-amount" ng-model="$ctrl.editExpense.amount">
        </p>
        <p>
          <button type="submit">Update Expense</button>
        </p>
      </form>
      </div>
      `
    })

    controller.$inject = ['$http']

  function controller($http) {
    const vm = this
    vm.expenses = []
    vm.addExpense = addExpense
    vm.editComplete = editComplete
    vm.deleteExpense = deleteExpense
    vm.expense = {}

    vm.$onInit = function() {
      $http.get('/').then(function(response) {
        vm.expenses = expenses.data
      })
    }

    function addExpense(category, amount) {

    }
  }

}());
