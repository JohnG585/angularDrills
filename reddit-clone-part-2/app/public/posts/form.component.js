(function() {
  'use strict';

  angular.module('app')
    .component('forms', {
      templateUrl: './templates/edit.html',
      controller: formController,
      // bindings: {
      //   postId: "="
      // }
    })

    formController.$inject = ['postService', '$state', '$stateParams']

    function formController(postService, $state, $stateParams) {
      const vm = this
      vm.post = {};
      vm.posts = []

            vm.$onInit = function() {
              const postId = $stateParams.id
              postService.editingPost(postId).then((result) => {
                vm.post = result
              })
            }

      vm.createPost = function() {
        vm.post = {
          title: vm.title,
          author: vm.author,
          body: vm.body,
          image_url: vm.image,
          created_at: new Date(),
          vote_count: 0
        }
        postService.addPost(vm.post)
          .then((result) => {
            vm.posts.push(result);
            delete vm.post
          })
      }

      vm.editPost = function() {
        postService.editPost(vm.post.id, vm.post).then((result) => {
          $state.go('home')
          vm.posts = result
        })
      }
    }
}())
