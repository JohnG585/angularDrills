(function() {
  'use strict';

  angular.module('app')
    .component('editPost', {
      controller: editPostController,
      templateUrl: './posts/edit.html'
    })

    editPostController.$inject = ['postService', '$state', '$stateParams']

    function editPostController(postService, $state, $stateParams) {
      const vm = this
      const postId = $stateParams.id

      vm.$onInit = function() {
      postService.editingPost(id)
      .then(post => vm.post = post)
    }
  }
})()
