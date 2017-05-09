// (function() {
//   'use strict';
//
//   angular.module('app')
//     .component('editPost', {
//       controller: editPostController,
//       templateUrl: './templates/edit.html'
//     })
//
//     editPostController.$inject = ['postService', '$state', '$stateParams']
//
//     function editPostController(postService, $state, $stateParams) {
//       const vm = this
//        vm.posts = []
//        vm.post = {}
//
//       vm.$onInit = function() {
//         const postId = $stateParams.id
//         postService.editingPost(postId).then((result) => {
//           vm.post = result
//         })
//       }
//
//       vm.editPost = function() {
//         postService.editPost(vm.post.id, vm.post).then((result) => {
//          $state.go('home')
//          vm.posts = result
//        })
//       }
//   }
// })()
