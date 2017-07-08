var myController1Module = angular.module('myApp.controller1',[]);
myController1Module.controller('myController1',function($scope,myService){
    $scope.school = myService.school;
    $scope.subject = myService.subject;
    $scope.lesson = '流行框架';
});