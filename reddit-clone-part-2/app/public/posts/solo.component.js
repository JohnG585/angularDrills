(function() {
  'use strict';

  angular.module('app')
    .component('solo', {
      controller: soloController,
      templateUrl: './templates/solo.html',
      bindings: {
        post: "<"
      }
    })

    soloController.$inject = ['postService']

    function soloController(postService) {
      const vm = this
      vm.posts = []

      vm.$onInit = function() {
        postService.getPosts(vm.post).then((result) => {
          vm.posts = result
        })
      }

      vm.$onChanges = function(changes) {
        console.log(changes.post.currentValue)
      }
    }
}())
