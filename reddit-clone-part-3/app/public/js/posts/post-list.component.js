(function() {
  'use strict'

  angular.module('app')
    .component('postList', {
      require: {
        layout: '^app'
      },
      templateUrl: '/js/posts/post-list.template.html',
      controller: controller
    })

  controller.$inject = ['postService', 'commentService']
  function controller(postService, commentService) {
    const vm = this

    vm.$onInit = onInit
    vm.togglePostForm = togglePostForm
    vm.createPost = createPost
    vm.createComment = createComment
    vm.voteUp = voteUp
    vm.voteDown = voteDown

    function onInit() {
      postService.all()
        .then(posts => vm.posts = posts)
    }

    function togglePostForm() {
      vm.addingPost = !vm.addingPost
    }

    function createPost(post) {
      postService.create(post)
        .then(post => {
          vm.posts.push(post)
          vm.togglePostForm()
          delete vm.post
        })
    }

    function createComment(post) {
      commentService.create(post, post.newComment)
        .then(comment => {
          post.comments.push(comment)
          delete post.newComment
        })
    }

    function voteUp(post) {
      postService.upvote(post)
        .then(voteCount => post.vote_count = voteCount )
    }

    function voteDown(post) {
      postService.downvote(post)
        .then(voteCount => post.vote_count = voteCount)
    }

  }

}());
