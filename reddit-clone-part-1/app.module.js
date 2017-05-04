(function() {
  'use strict'

  angular.module('app', [])
  .component('navTab', {
    templateUrl: 'templates/nav.html'
  })
    .component('reddit', {
      controller: controller,
      templateUrl: 'templates/posts.html'
  })
    .component('commentBox', {
      controller: CommentController,
      templateUrl: 'templates/comments.html'
    })
      function controller() {
        const vm = this
        vm.post = {}
        vm.posts = []

        vm.$onInit = function() {
          vm.posts = [
            {title: 'Hey now', author:"Dale", body:"Testing", image:"./images/pexels-photo-69212.jpeg", votes:4}
          ]
        }
        vm.postAdded = function() {
          vm.post = {
            title: vm.post.title,
            author: vm.post.author,
            body: vm.post.body,
            image: vm.post.image,
            votes: 0
          }
          vm.posts.push(vm.post)
          delete vm.post
        }

        vm.downVote = function(post) {
            if (post.votes > 0) {
              post.votes--
            }
        }

      }

      function CommentController() {
        const vm = this
        vm.post = {}
        vm.posts = []
        vm.newComments = []

        vm.addComment = function() {
          vm.newComments.push(vm.postComment)
          delete vm.postComment
        }
      }

})()
