app.controller("MainController",["$scope", "burgers", function($scope, burgers){
	burgers.success(function(data){
		$scope.burgers = data;
	});
}]);