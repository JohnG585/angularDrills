(function() {
  'use strict';

  angular.module('app')
    .component('listings', {
      templateUrl: '/listings/listings.template.html',
      controller: controller,
    })

  function controller() {
    const vm = this

    vm.$onInit = function () {
      vm.title = "Listings"

      vm.listings = [{
        title: 'Big house in the countryside',
        photo: 'http://www.oliverstravels.com/uploads/herder_image/crop_300_300_Severn%20Country%20House%20-%20Wales%20-%20Stately%20Escapes%20(6).jpg',
        price: 1000000,
        realtor: 'Seller McSellface'
      }, {
        title: 'Medium-sized house in the suburbs',
        photo: 'https://s-media-cache-ak0.pinimg.com/736x/ba/ed/03/baed03024feffcd49be8e78d7b0dab3b.jpg',
        price: 500000,
        realtor: 'Vendor McVendface'
      }, {
        title: 'Small house in the city',
        photo: 'https://static.dezeen.com/uploads/2016/06/blurring-boxes-architensions-residential-extension-brooklyn-new-york-city-usa-cameron-blaylock_dezeen_sqa-300x300.jpg',
        price: 250000,
        realtor: 'Mogul McMogulface'
      }];
    }

  }

}());
