var myController1Module = angular.module('myController1Module',[]);
myController1Module.controller('myController1',function($scope,myService){
    $scope.school = myService.school;
    $scope.subject = myService.subject;
    $scope.lesson = '流行框架';
});