(function() {
  'use strict';

  angular.module('app')
    .service('commentService', service)

  service.$inject = ['$http'];

  function service($http) {

      this.comments = function(id) {
        return $http.get(`/api/posts/${id}/comments`).then((results) => {
          return results.data
        })
      }

      this.commentAdded = function(id, comment) {
        return $http.post(`/api/posts/${id}/comments`, comment).then((result) => {
          return result.data
        })
      }
    }

}());
