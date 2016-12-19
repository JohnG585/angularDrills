(function() {
  'use strict';

  angular.module('app')
    .service('quoteService', service)


  service.$inject = ['$http']

  function service($http) {
    this.quoteCall = function() {
      const randomNum = Math.floor(Math.random()*1000)
      const url = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&randomnum=${randomNum}`
      return $http.get(url, {cache:false}).then(results => results.data[0])
    }
  }
}());
