app.directive("burgerInfo", function(){
	return {
		restrict: "E",
		scope: {
			info: "="
		},
		templateUrl: "js/directives/burgerInfo.html"
	};
});