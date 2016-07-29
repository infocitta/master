// Code goes here

var myApp = angular.module('myApp', []);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.weekdayname = ['','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];
  $scope.today= new Date().toJSON();
  

  $scope.contatto = [
      {id: '0', name: 'Telefono'},
      {id: '1', name: 'Email'},
      {id: '2', name: 'Link'}
    ];	
  
  
 $http.get("https://raw.githubusercontent.com/infocitta/infocitta.github.io/master/desio/asilo_nido/asilo_nido_comunale_via_diaz/entity.json")
    .then(function(response) {
        $scope.entity = response.data;
    });
	
	
//Indirizzi
$scope.addAddr=function () {
	$scope.entity.Adresses.push({ Title: 'Indirizzo', Value: '', Latitude: '', Longitude: '', Note: '' });
}
	
$scope.removeAddr = function(index) {
	if (confirm('Corfema eliminazione?')) {
		$scope.entity.Adresses.splice(index, 1);     
	} 	 
}


//Contatti

$scope.addCt=function () {
	$scope.entity.Contacts.push({Title:'Contatto',Value:'',Note: '',Type:0 });
}
	
$scope.removeCt = function(index) {
	if (confirm('Corfema eliminazione?')) {
		$scope.entity.Contacts.splice(index, 1);     
	} 	 
}

//Note

$scope.addNt=function () {
	$scope.entity.Notes.push({Title: 'Note',Value: ''    });
}
	
$scope.removeNt = function(index) {
	if (confirm('Corfema eliminazione?')) {
		$scope.entity.Notes.splice(index, 1);     
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
