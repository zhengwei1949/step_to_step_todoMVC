(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('myApp',[]);
	myApp.controller('myController',['$scope',function($scope){
		//要展示的任务数据
		$scope.todos = [
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:true},
			{id:3,name:'打豆豆',completed:false},
			{id:4,name:'学习',completed:true},
			{id:5,name:'喝水',completed:false}
		];

		//添加任务
		$scope.newTodo=''  // ng-model
		$scope.add = function(){
			// 判断newTodo是否为空，为空则不添加任务
			if(!$scope.newTodo){
				return
			}

			// 把新任务添加到$scope.todos中去
			$scope.todos.push({
				id:Math.random(),
				name:$scope.newTodo,
				completed:false
			})
			// 置空
			$scope.newTodo=''
		}
		
	}]);
})(angular);
