(function() {
  'use strict'

  angular.module('app')
    .service('postService', service)

    service.$inject = ['$http']

    function service($http) {


      this.getPosts = function() {
      return $http.get('/api/posts').then((results) => {
        return results.data
        //might have to change for array
      })
    }

      this.addPost = function(newPost) {
        return $http.post('/api/posts', newPost).then((result) => {
          return result.data
        })
      }

      this.upVote = function (id) {
        console.log('Got here as well, and the id is '+id)
        return $http.post(`/api/posts/${id}/votes`).then((result) => {
          return result.data.vote_count
        })
      }

      this.downVote = function (id) {
        console.log('Got here as well, and the id is '+id)
        return $http.delete(`/api/posts/${id}/votes`).then((result) => {
          return result.data.vote_count
        })
      }

      this.editingPost = function(id) {
        console.log('Got here as well')
        return $http.get(`/api/posts/${id}`).then((result) => {
          return result.data
        })
      }

      this.deletePost = function(id) {
        return $http.delete(`/api/posts/${id}`).then((result) => {
          return result.data
        })
      }
    }

}());
