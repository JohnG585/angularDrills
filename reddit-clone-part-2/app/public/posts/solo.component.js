(function() {
  'use strict'

  angular.module('app')
    .component('solo', {
      controller: soloController,
      templateUrl: './templates/solo.html',
      bindings: {
        post: "="
      }
    })

    soloController.$inject = ['postService', 'commentService']

    function soloController(postService, commentService) {
      const vm = this
      vm.posts = []

      vm.$onInit = function() {
      postService.getPost(vm.post).then((result) => {
        vm.post = result
      })

      commentService.comments(vm.post).then((result) => {
        vm.comments = result
      })
      }

      vm.upVote = function() {
        postService.upVote(vm.post.id).then(() => {
          vm.post.vote_count++
        });
      }

      vm.downVote = function() {
        let index = vm.post.id
        if (vm.post.vote_count > 0) {
          postService.downVote(index).then(() => {
          vm.post.vote_count--
          });
        }
      }

      vm.addComment = function() {
        commentService.commentAdded(vm.post.id, vm.comment).then((result) => {
          vm.comments.push(result)
          delete vm.comment
        })
      }

    }
}())
