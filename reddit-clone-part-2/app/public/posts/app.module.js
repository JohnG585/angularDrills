(function() {
  'use strict'

  angular.module('app', ['angularMoment'])
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
        vm.selection = "-votes"
        vm.$onInit = function() {
          vm.posts = [
            {
            id: 1,
            title: 'Found the best recipe for flan!',
            author:"Dayle",
            body:"If anyone wants it, please send up a smoke signal. I am against technology and recognizing irony.",
            image:"./images/pexels-photo-69212.jpeg",
            votes:4,
            time: '02-10-2017 13:15'
            },
            {
            id:2,
            title: 'Father John Misty Stole My Mustache',
            author: 'Swain',
            body: "That Leonard Cohen-knockoff can\'t even grow original facial hair. Unfollow.",
            image:"./images/pexels-photo-121442.jpeg",
            votes: 2,
            time: '04-23-2017 05:30'
            },
            {
            id:3,
            title: 'I have nothing to say',
            author: 'Tiphany',
            body: "What\'s the point...ya know?",
            image:"./images/pexels-photo-192440.jpeg",
            votes: 25,
            time: '03-20-2017 14:32'
            },
            {
            id:4,
            title: 'Has Sylvan Esso Sold Out??',
            author: 'Heathcliff',
            body: "I was a HUGE fan of theirs back when Amelia had just left Mountain Man, but ever since 'Radio' became a huge hit both of them have stopped replying to my emails. Like, what's the point of becoming famous if you're just going to ignore the fans who have been there since the beginning, you know?",
            image:"./images/pexels-photo-214135.jpeg",
            votes: 6,
            time: '03-21-2017 17:22'
            },
          ]
        }
        vm.postAdded = function() {
          vm.post = {
            title: vm.post.title,
            author: vm.post.author,
            body: vm.post.body,
            image: vm.post.image,
            votes: 0,
            time: new Date()
          }
          vm.posts.push(vm.post)
          delete vm.post
        }

        vm.downVote = function(post) {
            if (post.votes > 0) {
              post.votes--
            }
        }
        vm.filtering = function(filter) {
            vm.selection = filter
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
