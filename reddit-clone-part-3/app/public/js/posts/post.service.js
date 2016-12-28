(function() {
  'use strict'

  angular.module('app')
    .service('postService', service)

  service.$inject = ['$http']
  function service($http) {
    this.all = all
    this.findById = findById
    this.create = create
    this.update = update
    this.upvote = upvote
    this.downvote = downvote

    function all() {
      return $http.get('/api/posts')
        .then(response => response.data)
    }

    function findById(id) {
      return $http.get(`/api/posts/${id}`)
        .then(response => {
          const post = response.data
          return $http.get(`/api/posts/${id}/comments`)
            .then(response => {
              post.comments = response.data
              return post
            })
        })
    }

    function create(post) {
      return $http.post('/api/posts', post)
        .then(response => {
          response.data.comments = []
          return response.data
        })
    }

    function update(id, post) {
      return $http.patch(`/api/posts/${id}`, post)
        .then(response => {
            return response.data
        })
    }

    function upvote(post) {
      return $http.post(`/api/posts/${post.id}/votes`)
        .then(response => {
          return response.data.vote_count
        })
    }

    function downvote(post) {
      if(post.vote_count === 0) return Promise.resolve(post.vote_count)
      return $http.delete(`/api/posts/${post.id}/votes`)
        .then(response => {
          return response.data.vote_count
        })
    }

  }

}());
