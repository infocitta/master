// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.items = [];
  $scope.level1 = [];
  console.log('level2');
 $http.get("level2.json")
    .then(function(response) {
    	console.log('load');
        $scope.items = response.data;
    });
console.log('level1');
 $http.get("level1.json")
    .then(function(response) {
    	console.log('load');
        $scope.level1 = response.data;
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
