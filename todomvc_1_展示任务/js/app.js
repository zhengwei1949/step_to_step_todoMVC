(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('myApp',[]);
	myApp.controller('myController',['$scope',function($scope){
		$scope.todos = [
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:true},
			{id:3,name:'打豆豆',completed:false},
			{id:4,name:'学习',completed:true},
			{id:5,name:'喝水',completed:false}
		];

		
	}]);
})(angular);
