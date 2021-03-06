function TodoCtrl($scope) {
	$scope.todos = [
		{text:'learn angular', done:true},
		{text:'build an angular app', done:false}
	];


	$(document.body).css('border', '1px solid red');
	$(document.body).css('font-weight', 'bold');


	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';

		if($scope.todos.length % 2){
			$(document.body).css('background-color', 'azure');
		}else{
			$(document.body).css('background-color', 'white');
		}
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
	};
}