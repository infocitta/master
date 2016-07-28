// Code goes here

var myApp = angular.module('myApp', []);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.weekdayname = ['','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];
  $scope.today= new Date().toJSON();
 $http.get("https://raw.githubusercontent.com/infocitta/infocitta.github.io/master/desio/asilo_nido/asilo_nido_comunale_via_diaz/entity.json")
    .then(function(response) {
        $scope.entity = response.data;
    });

$scope.addAddr=function () {
	$scope.entity.Contact.push({Value: ''});
}
	
$scope.removeContact = function(index) {
	if (confirm('Corfema eliminazione?')) {
		$scope.entity.Contact.splice(index, 1);     
	} 	 
}
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
