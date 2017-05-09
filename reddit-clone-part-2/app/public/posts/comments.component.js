(function() {
  'use strict';

  angular.module('app')
    .component('comments', {
      controller: commentController,
      templateUrl: './templates/comments.html',
      bindings: {postId: '='}
    })

    commentController.$inject = ['postService']

    function commentController(postService) {
      const vm = this
      vm.comments = []
      vm.comment = {
        content: vm.content,
        image_url: vm.image
      }

      vm.$onInit = function() {
        postService.comments(vm.postId).then((result) => {
          vm.comments = result
        })
      }

      vm.addComment = function(id) {
        postService.commentAdded(id, vm.comment).then((result) => {
          vm.comments.push(result)
          delete vm.comment
        })
      }
    }

})()
