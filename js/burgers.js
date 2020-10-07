app.factory("burgers", ["$http", function($http){
	return $http.get("js/burgerData.json")
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);