(function() {
  'use strict';

  angular.module('app')
    .component('quotes', {
      template: `
        <div class="quoteBlock">
          <div>
            <div ng-bind-html="$ctrl.quote"></div>
            <i ng-click="$ctrl.reloadQuote()" class="fa fa-refresh"></i>
            <p class="author">-{{$ctrl.author}}</p>
          </div>
        </div>
      `,
      controller: controller,
    })

    controller.$inject = ['$sce', 'quoteService']

    function controller($sce, quoteService) {
      const vm = this

      vm.reloadQuote = getQuote

      vm.$onInit = function () {
        vm.title = "Main Page"

        getQuote()
      }

      function getQuote() {
        quoteService.quoteCall().then(function(results) {
          let quote = results.content
          vm.author = results.title
          vm.quote = $sce.trustAsHtml(quote)
        })
      }

    }

}());
