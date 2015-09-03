var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.on = false;
	$scope.name = "horrrr";
	$scope.doSomething = function() {
		var canvas = document.getElementById("horrorCanvas");
		var context = canvas.getContext("2d");

		if (!$scope.on) {
			context.fillStyle = "red";
			context.font = "bold 32px Arial";
			context.fillText("Welcome", 100, 100);
			$scope.on = true;
		} else {
			context.clearRect(0, 0, canvas.width, canvas.height);
			$scope.on = false;
		}

	}
	document.getElementById("horrorCanvas").focus();
}]);

app.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEnter);
				});

				event.preventDefault();
			}
		});
	};
});

//maybe use a sound library?