(function (angular) {
	'use strict';
	// Your starting point. Enjoy the ride!
  
  // 1.创建模块
  var app = angular.module('todosApp', [])

  // 2.创建控制器
  app.controller('todosController', ['$scope', function($scope){
    
    // 功能1.任务的展示(ng-repeat)
    // 假设已经得到数据
    $scope.todos = [
    {id:1,name:'吃饭',completed:true},
    {id:2,name:'睡觉',completed:true},
    {id:3,name:'打豆豆',completed:false},
    {id:4,name:'学习',completed:true},
    {id:5,name:'喝水',completed:false},
    ]

    // 功能2.添加任务
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

    // 功能3.删除任务
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

    // 功能4：修改任务内容 
    $scope.isEditingId = -1
    $scope.edit = function(id){
      $scope.isEditingId = id
    }

    // 只是改变也文本框的编辑状态
    $scope.save = function(){
      $scope.isEditingId = -1
    }

    // 功能5.修改任务状态

    // 功能6.批量切换任务状态
    $scope.selectAll = false
    $scope.toggleAll = function(){
      // 让$scope.todos中所有数据的completed值等于$scope.selectAll
      for (var i = 0; i < $scope.todos.length; i++) {
        var item = $scope.todos[i]
        item.completed = $scope.selectAll
      }
    }

    // 功能7.显示未完成任务数
    $scope.getActive = function(){
      var count = 0
      // 遍历$scope.todos, 找到所有completed属性值为false的数据
      for (var i = 0; i < $scope.todos.length; i++) {
        var item = $scope.todos[i]
        if(!item.completed){
          count++
        }
      }
      return count
    }

    // 功能8.清除所有已完成任务
    $scope.clearAll = function(){
      // 遍历$socpe.todos数组，如果当前元素的completed为true,就把它删除掉
      // for (var i = 0; i < $scope.todos.length; i++) {
      //   // true, false(1) ,false

      //   // i=0,length=5  true,  要删除  length 4
      //   // i=1,length=4  false, 不删除 length 4
      //   // i=2,length=4  true , 要删除 length 3
      //   // i=3,length=3

      //   var item = $scope.todos[i]
      //   if(item.completed){
      //     $scope.todos.splice(i,1)
      //   }
      // }

      for (var i = $scope.todos.length - 1; i >= 0; i--) {
        // true(0),false(1),false(2)
        var item = $scope.todos[i]
        if(item.completed){
          $scope.todos.splice(i,1)
        }
      }
    }
  }]) 

})(angular);
