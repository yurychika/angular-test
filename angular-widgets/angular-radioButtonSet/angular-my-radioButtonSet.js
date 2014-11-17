angular.module('my.radioButtonSet', [])
.directive('myRadiobuttonset', function(){
	return {
		restrict: 'E',
		templateUrl: 'template.html',
		replace: true,
		scope: {
			data: '=customOption',
			checkboxValue: '=ngModel',
		},
		link: function (scope, element) {
			scope._uuid = scope.$parent.myRadiobuttonsetCount++;
			scope.name = 'Jeff';
			scope.count++;
			[].forEach.apply(element, [function(el){
				// console.log(el.classList);
				el.classList.add(scope.baseClass);
			}]);
		},
		controller: ['$scope', '$http', function($scope, $http) {
			$scope.value = null;
			$scope.search = '';

			$scope.change = function(e){
				$scope.value = e.target.value;
				console.log($scope.value);
			};
			$scope.select = function(e){
				return;
				$scope.value = e.target.tagName === 'SPAN'? e.target.innerHTML : e.target.querySelector('span').innerHTML;
				$scope._hide = true;
			};
		}],
	}
});