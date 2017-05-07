(function() {
  'use strict';

  angular.module('app')
    .component('editPost', {
      controller: editController,
      template: '../templates/editPost.html'
    })

    editController.$inject = ['$stateParams', '$state']
      function editController($stateParams, $state) {
        const vm = this


      }

})()
