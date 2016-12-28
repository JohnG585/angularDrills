(function() {
  'use strict'

  angular.module('app')
    .component('postForm', {
      bindings: {
        post: '=',
        buttonText: '@',
        onSubmit: '&',
      },
      templateUrl: '/js/posts/form.template.html',
    })

}());
