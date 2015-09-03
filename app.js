var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.name = "horrrr";
	$scope.doSomething = function() {
		console.log($scope.name);
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