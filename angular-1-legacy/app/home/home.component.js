(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      template: `
        <p>Welcome to Angular Homes. A single page application for all your housing needs.</p>
        <br>
        <a ui-sref="listings">-> Click here to see listings</a>
      `
    })

}());
