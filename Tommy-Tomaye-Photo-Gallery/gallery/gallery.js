
/* let's take the user to the 
image url after he clicks on it  
*/ 
'use strict';

angular.module('photoGalleryApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('img/photos.json').success(function(data) {
          $scope.photos = data;
        });

        $scope.orderProp = 'name';
}]);
