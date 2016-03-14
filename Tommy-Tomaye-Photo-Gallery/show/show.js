
'use strict';

angular.module('photoGalleryApp.show', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery/:photoId', {
    templateUrl: 'show/show.html',
    controller: 'ShowCtrl'
  });
}])

// Controller for each image
.controller('ShowCtrl', ['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http) {
    $http.get('img/photos.json').success(function(data) {
      $scope.photos = data;
      // let's get the right index and url of an image 
      $scope.index = $routeParams.photoId.charAt($routeParams.photoId.length-1)-1;
      $scope.imageUrl = data[$scope.index].imageUrl;
      $scope.date = new Date();
    });

    // let's load the image according to it's Id 
    $scope.photoId = $routeParams.photoId;

    // Comments area functionality:
    $scope.comments = [];
    $scope.btn_add = function() {
      if($scope.userComment != "") {
        $scope.comments.unshift($scope.userComment);
        $scope.userComment = "";
      }
    }

}]);
