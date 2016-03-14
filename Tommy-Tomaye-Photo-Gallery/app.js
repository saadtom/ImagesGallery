'use strict';
// this module is resposible for returing the user to the main page
angular.module('photoGalleryApp', [
  'ngRoute',
  'photoGalleryApp.gallery',
  'photoGalleryApp.show'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/gallery'});
}]);
