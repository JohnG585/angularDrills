(function() {
  'use strict';

  angular.module('app')
    .service('postService', service)

  service.$inject = ['$http'];

  function service($http) {

    this.getPosts = function() {
      return $http.get('/api/posts').then((results) => {
        return results.data;
      });
    };

    this.getPost = function(id) {
    return $http.get(`/api/posts/${id}`).then( (result) => {
  return result.data
})
}

    this.addPost = function(newPost) {
      return $http.post('/api/posts', newPost).then((result) => {
        return result.data;
      });
    };

      this.upVote = function (id) {
        return $http.post(`/api/posts/${id}/votes`).then((result) => {
          return result.data.vote_count
        })
      }

      this.downVote = function (id) {
        return $http.delete(`/api/posts/${id}/votes`).then((result) => {
          return result.data.vote_count
        })
      }

      this.editingPost = function(id) {
        return $http.get(`/api/posts/`).then((result) => {
          return result.data
        }).then((result) => {
          return result.find((post) => post.id == id)
        })
      }

      this.editPost = function(id, newPost) {
        return $http.patch(`/api/posts/${id}`, newPost).then((result) => {
          return $http.get('/api/posts').then((result) => {
            return result.data
          })
        })
      }
    }

}());
