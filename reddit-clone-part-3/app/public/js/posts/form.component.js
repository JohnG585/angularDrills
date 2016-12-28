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
      controller: controller
    })

  function controller() {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
    }

  }

}());
