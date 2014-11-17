define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('MyCtrl1', ['$scope', function ($scope) {
		// console.log(123);
		// console.log($scope);
		$scope.title = 'my page 1';
	}]);
});
