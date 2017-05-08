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
          vm.newPost = postService.new
          vm.post = {}
          vm.filtering = 'votes'
          vm.filtered = filtered

          vm.$onInit = function() {

            postService.getPosts()
              .then((posts) => {
                vm.posts = posts
              })
          }

          vm.createPost = function() {
            vm.post = {
              title: vm.post.title,
              author: vm.post.author,
              body: vm.post.body,
              image_url: vm.post.image,
              created_at: new Date(),
              vote_count: 0
            }
            postService.addPost(vm.post)
            .then((result) => {
              vm.posts.push(result)
              delete vm.post
            })
          }

          function filtered() {
            switch (vm.filtering) {
              case 'votes':
              vm.sorted = 'vote_count'
              break;
              case 'author':
              vm.sorted = 'author'
              break;
              case 'title':
              vm.sorted = 'title'
              break;
              default:
              vm.sorted = "vote_count"
  }
}

      }

})()
