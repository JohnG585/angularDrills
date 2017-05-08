(function() {
  'use strict'

  angular.module('app')
    .service('postService', service)

    service.$inject = ['$http']

    function service($http) {

      this.newpost = []

      this.getPosts = function() {
      return $http.get('/api/posts').then((results) => {
        return results.data
        //might have to change for array
      })
    }

      this.addPost = function(newPost) {
        return $http.post(`/api/posts`, newPost).then((result) => {
          return result.data
        })
      }
    }

}());
