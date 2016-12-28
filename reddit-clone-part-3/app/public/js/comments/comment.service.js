(function() {
  'use strict'

  angular.module('app')
    .service('commentService', service)

  service.$inject = ['$http']
  function service($http) {
    this.create = create

    function create(post, comment) {
      return $http.post(`/api/posts/${post.id}/comments`, comment )
        .then(response => {
          return response.data
        })
    }

  }

}());
