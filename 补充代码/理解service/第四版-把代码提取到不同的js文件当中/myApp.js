var myApp = angular.module('myApp',['myServiceModule']);
myApp.controller('myController1',function($scope,myService){
    $scope.school = myService.school;
    $scope.subject = myService.subject;
    $scope.lesson = '流行框架';
});
myApp.controller('myController2',function($scope,myService){
    $scope.school = myService.school;
    $scope.subject = myService.subject;
    $scope.lesson = 'Node.js';
});