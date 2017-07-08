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

	//删除任务
	$scope.remove = function(id){
      // 根据id到数组$scope.todos中查找相应元素，并删除
      for (var i = 0; i < $scope.todos.length; i++) {
        var item = $scope.todos[i]
        if(item.id === id){
          $scope.todos.splice(i,1) // 删除数据
          return
        }
      }
    }

	//修改任务
	$scope.isEditingId = -1
	$scope.edit = function(id){
		$scope.isEditingId = id
	}

	// 只是改变也文本框的编辑状态
	$scope.save = function(){
		$scope.isEditingId = -1
	}
		
	}]);
})(angular);
