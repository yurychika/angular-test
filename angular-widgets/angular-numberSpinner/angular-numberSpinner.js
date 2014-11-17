angular.module('my.numberSpinner', [])
.directive('myNumberspinner', function(){
	return {
		restrict: 'E',
		templateUrl: 'template.html',
		replace: true,
		scope: {
			data: '=customDataStore',
			baseClass: '@baseClass',
			minValue: '@minValue',
			maxValue: '@maxValue',
			// checkboxValue: '@checkboxValue'
			value: '=ngModel'
		},
		link: function (scope, element) {
			scope.name = 'Jeff';
			scope.minValue = parseInt(scope.minValue, 10);
			scope.maxValue = parseInt(scope.maxValue, 10);
			scope.error = true;

			[].forEach.apply(element, [function(el){
				el.classList.add(scope.baseClass);
			}]);
		},
		controller: ['$scope', '$http', function($scope, $http) {
			$scope.toggleClick = function(){
				console.log('toggle click');
				$scope._hide = !$scope._hide;
				$scope.search = '';
			};

			$scope.isValid = function(){
				// console.log(arguments);
				// console.log(this, 'this');
				return !isNaN($scope.value);
			};

			$scope.up = function(e){
				var value = parseInt($scope.value);

				if(isNaN(value)){
					$scope.value = $scope.minValue;
					return;
				}
				if(value < $scope.maxValue) $scope.value = ++value;
			};

			$scope.down = function(e){
				var value = parseInt($scope.value);

				if(isNaN(value)){
					$scope.value = $scope.minValue;
					return;
				}
				if(value > $scope.minValue) $scope.value = --value;
			};
		}]
	}
})