(function() {
  'use strict'

  angular.module('app')
    .service('postService', service)

    service.$inject = ['$http']

    function service($http) {
      this.getPosts = function() {
      return $http.get('/api/posts').then((results) => {
        const posts = results.data;
        return posts
      })
    }

      this.upVote = function() {
        
      }
    }

}());
