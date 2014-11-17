angular.module('my.checkboxlist', [])
.directive('myCheckboxlist', function(){
	return {
		restrict: 'E',
		templateUrl: 'template.html',
		replace: true,
		scope: {
			data: '=customOption',
			checkboxValue: '=ngModel',
		},
		link: function (scope, element) {
			scope.name = 'Jeff';
			console.log(element, element.forEach);
			[].forEach.apply(element, [function(el){
				// console.log(el.classList);
				el.classList.add(scope.baseClass);
			}]);
			// element.forEach(function(el){
			// 	el.classList.add(scope.baseClass);
			// });
		},
		controller: ['$scope', '$http', function($scope, $http) {
			$scope._hide = true;
			$scope.value = [];
			$scope.search = '';

			$scope.toggleClick = function(){
				console.log('toggle click');
				$scope._hide = !$scope._hide;
				$scope.search = '';
			};

			$scope.change = function(e){
				var value = e.target.value,
					checked = e.target.checked;

				if(checked){
					$scope.value.push(value);
				}else{
					var index = $scope.value.indexOf(value);

					if(index >= 0){
						$scope.value.splice(index, 1);
					}
				}
				console.log($scope.value);
				// console.log(e.target);
				console.log('change');
			};
		}]
	}
})