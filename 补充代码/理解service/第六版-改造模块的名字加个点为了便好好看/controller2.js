var myController2Module = angular.module('myApp.controller2',[]);
myController2Module.controller('myController2',function($scope,myService){
    $scope.school = myService.school;
    $scope.subject = myService.subject;
    $scope.lesson = 'Node.js';
});