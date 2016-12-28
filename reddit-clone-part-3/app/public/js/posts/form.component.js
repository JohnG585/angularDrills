(function() {
  'use strict'

  angular.module('app')
    .component('postForm', {
      bindings: {
        post: '<',
        buttonText: '@',
        onSubmit: '&',
      },
      controller: function(){
        const vm = this

        vm.submit = function () {
          vm.onSubmit({post: vm.post})
        }
      },
      templateUrl: '/js/posts/form.template.html',
    })

}());
