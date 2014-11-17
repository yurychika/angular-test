angular.module('my.combobox', [])
.directive('myCombobox', function(){
	return {
		restrict: 'E',
		templateUrl: 'template.html',
		replace: true,
		scope: {
			data: '=customDataStore',
			baseClass: '@baseClass',
			// checkboxValue: '@checkboxValue'
			checkboxValue: '=ngModel'
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
			console.log('in controller function');
			$scope._hide = true;
			$scope.value = '';
			$scope.search = '';

			$scope.toggleClick = function(){
				console.log('toggle click');
				$scope._hide = !$scope._hide;
				$scope.search = '';
			};

			$scope.select = function(e){
				$scope.value = e.target.tagName === 'SPAN'? e.target.innerHTML : e.target.querySelector('span').innerHTML;
				$scope._hide = true;
			};

			$scope.dropdownBlur = function(e){
				console.log('blur');
				$scope._hide = true;
			};

			$scope.inputKeyPress = function(e){
				// console.log($scope.checkboxValue);
				// console.log($scope.data);
				$scope.search = $scope.value;
				$scope._hide = false;
			};
		}],
	}
})