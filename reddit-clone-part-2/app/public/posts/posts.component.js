(function() {
  'use strict';

  angular.module('app')
    .component('posts', {
      controller: postsController,
      templateUrl: './templates/posts.html'
    });

    postsController.$inject = ['postService']
      function postsController(postService) {
        const vm = this

        vm.newPost = postService.new;
        vm.post = {};
        vm.filtering = 'votes';
        vm.filtered = filtered;

        vm.$onInit = function() {
          vm.posts = [];
          vm.sorted = "-vote_count";

          postService.getPosts()
              .then((posts) => {
                vm.posts = posts;
              });
        };

        vm.createPost = function() {
          vm.post = {
            title: vm.post.title,
            author: vm.post.author,
            body: vm.post.body,
            image_url: vm.post.image,
            created_at: new Date(),
            vote_count: 0
          };
          postService.addPost(vm.post)
            .then((result) => {
              vm.posts.push(result);
              delete vm.post;
            });
        };

        vm.upVote = function(id) {
          postService.upVote(id).then(() => {
            let index = vm.posts.find(findPostID);
            index.vote_count++
          });
          function findPostID(post) {
            return post.id === id;
          }
        };

        vm.downVote = function(id) {
          let index = vm.posts.find(findPostID)
          if (index.vote_count > 0) {
            postService.downVote(id).then(() => {
            index.vote_count--
            });
          }
          function findPostID(post) {
            return post.id === id
          }
        };

          function filtered() {
            switch (vm.filtering) {
              case 'votes':
                vm.sorted = 'vote_count';
                break;
              case 'author':
                vm.sorted = 'author';
                break;
              case 'title':
                vm.sorted = 'title';
                break;
              default:
                vm.sorted = "vote_count"
            }
          }
      }
})();
