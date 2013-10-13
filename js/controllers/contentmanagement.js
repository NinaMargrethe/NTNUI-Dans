var app = angular.module('poledance');

app.controller'ContentManagementController', function($scope, $http, $location, $timeout, $routeParams) {
	
	$scope.canUseButtons = true;
	$scope.language = "norwegian";

	$scope.changeLanguage = function(){
		if($scope.language == "norwegian"){
			$scope.language = "english";		
		}else{
			$scope.language = "norwegian";
		}
	}


}

