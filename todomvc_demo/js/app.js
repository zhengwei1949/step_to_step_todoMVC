(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('myApp',[]);
	myApp.controller('myController',['$scope',function($scope){
		$scope.todos = [
			{id:1,name:'吃饭111',completed:false},
			{id:2,name:'睡觉',completed:true},
			{id:3,name:'打豆豆',completed:true},
			{id:4,name:'学习',completed:false},
			// {id:5,name:'学习',completed:false},
		];

		$scope.add = function(){
			if(!$scope.newTodo)return;
			// console.log(111);
			// console.log($scope.newTodo);
			var obj = {
				id:Math.random(),
				name:$scope.newTodo,
				completed:false
			};
			$scope.todos.push(obj);
			$scope.newTodo = '';
		}


		$scope.removeTodo = function(id){
			// console.log(id);
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					return;
				}
			}
		}

		$scope.toggleAll = function(){
			for(var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed = $scope.toggle
			}
		}


		$scope.clearCompletedFn = function(){
			//把$scope.todos数组中所有的已完成(completed的值为true)的全部删掉
			$scope.todos = $scope.todos.filter(function(item){return item.completed === false});
		}

		//我们一个东西是依赖于另一个数据模型的话，如果这个数据模型的值变了，这个东西也会重新计算
		$scope.getLeftItem = function(){
			// return $scope.todos.filter(function(item){return item.completed === false}).length;
			var total = 0;
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].completed === false)total++;
			}
			return total;
		}

		$scope.editId = -1;
		$scope.edit = function(id){
			console.log(id);
			$scope.editId = id;
		}
		$scope.save = function(){
			$scope.editId = -1;
		}
	}]);
})(window);
