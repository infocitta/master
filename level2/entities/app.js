// Code goes here

var myApp = angular.module('MyApp', ['angularUtils.directives.dirPagination','ngMap']);

function MyController($scope, $http) {


  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.items = [];

 $http.get("entities.json")
    .then(function(response) {
        $scope.items = response.data;
    });
 $http.get("level.json")
    .then(function(response) {
        $scope.level = response.data;
    });		
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
