(function() {
  'use strict';

  angular.module('app')
    .component('app', {
      template: `
        <div class="heading">
          <div class="title">
            <h1>Angular Homes</h1>
          </div>
          <quotes></quotes>
        </div>

        <ui-view></ui-view>
      `
    })

}());
