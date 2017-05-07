(function() {
  'use strict';

  angular.module('app')
    .component('posts', {
      controller: postsController,
      templateUrl: './posts/posts.html'
    })

    postsController.$inject = ['postService']
      function postsController(postService) {
        const vm = this
          vm.posts = []

          vm.$onInit = function() {
            postService.getPosts()
              .then((posts) => {
                vm.posts = posts
              })
          }

      }

})()
